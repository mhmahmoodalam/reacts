var ChatServerActionCreators = require('../Actions/ChatServerActionCreators');
import io from 'socket.io-client';
var socket=io("http://localhost:4000");
module.exports = {

  getAllMessages: function(url,data) {
    this.socket=socket;
    console.log("socketio initialized");
    this.socket.emit('new user',{"username":sessionStorage.getItem("username")});
    var rawMessages;
    console.log("form ChatWebAPIUtils");


    this.socket.on('usernames',function(data){
      var rawMsgs=[];
      console.log("captured usernames fired from server");
      console.log(data);
      data.forEach(function(item,index){
        if(item!=sessionStorage.getItem("username")){
          rawMsgs.push({
            authorName:"",
            id:'m_'+Date.now()+"_"+index+"$",
            text:"",
            threadID:'t_'+item,
            threadName:item,
            timestamp:Date.now()
          });
        }
        else if(item==sessionStorage.getItem("username") && data.length==1){
          console.log("single me");
          rawMsgs=[];
        }
      });
      console.log("after updating usernames");
      console.log(rawMsgs);
      ChatServerActionCreators.receiveAll(rawMsgs);
    });

    socket.on('new message',function(data){
      console.log("from new message in ChatWebAPIUtils");
      console.log(data);
      var rawMsgs=[];
      if(data.Username==sessionStorage.getItem("username")){
        rawMsgs.push({
          authorName:"",
          id:'m_'+Date.now()+"_",
          text:data.Message,
          threadID:'t_'+data.Username,
          threadName:data.Username,
          timestamp:Date.now()
        });
      }
    ChatServerActionCreators.receiveAll(rawMsgs);
    });

    socket.on('whisper',function(data){
      console.log("from whisper in ChatWebAPIUtils");
      console.log(data);
      var rawMsgs=[];
      if(data.Receiver==sessionStorage.getItem("username")){
        console.log("identified receiver");
        rawMsgs.push({
          authorName:data.Sender,
          id:'m_'+Date.now()+"_",
          text:data.Message,
          threadID:'t_'+data.Sender,
          threadName:data.Sender,
          timestamp:Date.now()
        });
      }
      console.log("from whispering message");
      console.log(rawMsgs);
      ChatServerActionCreators.receiveAll(rawMsgs);
    });

    //ChatServerActionCreators.receiveAll(rawMessages);
  },

  createMessage: function(message, threadName) {
    // simulate writing to a database
    //var rawMessages = JSON.parse(localStorage.getItem('messages'));
    var timestamp = Date.now();
    var id = 'm_' + timestamp;
    var threadID=null;
    if(sessionStorage.getItem("role")=="customer"){
      threadID='t_krishna';
    }
    else{
      threadID=message.threadID;
    }
    var createdMessage = {
      id: id,
      threadID: threadID,
      threadName: threadName,
      authorName: message.authorName,
      text: message.text,
      timestamp: timestamp
    };
    //rawMessages.push(createdMessage);
    //localStorage.setItem('messages', JSON.stringify(rawMessages));

    setTimeout(function() {
      ChatServerActionCreators.receiveCreatedMessage(createdMessage);
    }, 0);
    this.socket.emit("send message",createdMessage);
  },

  disconnect:function(){
    this.socket=socket;
    this.socket.disconnect();
  }
};
