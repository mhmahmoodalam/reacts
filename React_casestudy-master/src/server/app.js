import express from "express";
import path from 'path';
import routes from './routes.js';
import React from 'react';

const router = express.Router();

var app = express();
app.get('/',routes);
var http = require('http');
var serv = http.Server(app);

//var Layout=React.createFactory(require('./../shared/components/layout.jsx').Layout)
//Mongoose schema files
var Userlist=require('./models/userlist.js');
var PurchasedPdt=require('./models/productSchema.js');
var ProductDetails=require('./models/productDetailSchema.js');
var PurchasedSchema=require('./models/purchasedDetailSchema');
var ChatDataSchema =require('./models/chatData');
//creating a session;
var sessions=require('express-session');
var session;
var parser=require("body-parser");
require('./database.js');
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(parser.json());
app.use(parser.urlencoded({extended:false}));
app.use(sessions({
  secret:'aksdfklaiw7498rqwekflanlsdf',
  resave:false,
  saveUninitialized:true
}));


serv.listen(4000, function(req,res){
  console.log("running on port 4000");
});
var users=[];

var io = require('socket.io')(serv,{});
io.on('connection',function(socket){
  console.log("socketio io initialized");
  socket.on('new user',function(data){
    console.log("emitted new user");
    socket.username=data.username;
    users[socket.username]=socket;
    //send usernames to display in the client side.
    updateUsernames();
  });
  socket.on('send message',function(data,callback){
    var msg=data.text.trim();
    var name=data.threadID.substr(2,data.threadID.length-1);
    var receiver=data.threadID.substr(2,data.threadID.length-1);
    if(name in users){
      users[name].emit('whisper',{Message:msg,Sender:socket.username,Receiver:receiver});
	  console.log(msg);
	  console.log(socket.username);
	  console.log("whisperint to "+ receiver);
    }else{
      callback("Error! enter a valid user");
    }
  });
  //remove the user when they are not available.
  socket.on('disconnect',function(){
    console.log(socket.username);
    if(!socket.username){
      return;
    }else{
      delete users[socket.username];
      updateUsernames();
    }
  });

  function updateUsernames(){
    io.sockets.emit('usernames',Object.keys(users));
    //console.log(users);
  }
});

app.post('/login',function(req,res){
  var cred=req.body;
  session=req.session;
  PurchasedPdt.find(function(err,pdt){
    pdt.forEach(function(item){
      ProductDetails.findOne({pdtCode:item.pdtCode},'pdtCode feedbackDetails',function(err,productDetails){
        /*Calculating average feedback*/
        var total=0;
        productDetails.feedbackDetails.forEach(function(item){
          total+=parseInt(item.rating);
        });
        var avgRating= total/(productDetails.feedbackDetails.length);
        avgRating=avgRating.toFixed(2);
        avgRating=Math.round(avgRating*100)/100;
        PurchasedPdt.update({pdtCode:item.pdtCode,avgFeedback:0},{$set:{"avgFeedback":avgRating}}).exec(
          function(err,ret){
        });
      });
    });
  });
  Userlist.find(function(error,doc){
    for(let i=0;i<doc.length;i++){
      if(doc[i].username==cred.username && doc[i].password==cred.password){
        session.username=cred.username;
        //console.log("emitting socketio io event");
        //io.sockets.emit("new user",cred.username);
        res.send(doc[i]);
      }
      else{

      }
    }
  });
});

app.post('/purchasedItems',function(req,res){
  var data=req.body;
  //console.log(data);
  var userProducts=[];
  PurchasedSchema.find(function(err,purUsers){
    purUsers.forEach(function(perItem){
      if(data.username==perItem.purchasedUser){
        userProducts.push(perItem.pdtCode);
      }
    })
    //console.log(userProducts);
    PurchasedPdt.find(function(err,prod){
      var filteredPdt=[];
      prod.forEach(function(item){
        for(var i=0;i<userProducts.length;i++){
          if(item.pdtCode==userProducts[i]){
            filteredPdt.push(item);
          }
        }
      });
      res.send(filteredPdt);
    });
  });
});


app.post('/productDetails',function(req,res){
  console.log("inside pdt details");
  var pid=req.body;
  var feedback=[];
  PurchasedPdt.findOne({_id:pid.pdtId},function(err,data){
    ProductDetails.findOne({pdtCode:data.pdtCode},function(err,feedbackDetails){
      var retObj={pdtDetails:data,fbDetails:feedbackDetails};
      res.send(retObj);
    });
  });
});

app.post('/submitFeedback',function(req,res){
  console.log("inside submit  feedback");
  var feedbackData=req.body;
  console.log(feedbackData);
  ProductDetails.findOne({pdtCode:feedbackData.productId},'pdtCode feedbackDetails',function(err,productDetails){
    /*Calculating average feedback*/
    var total=0;
    productDetails.feedbackDetails.forEach(function(item){
      total+=parseInt(item.rating);
    })
    total+=parseInt(feedbackData.rating);
    var avgRating= total/(productDetails.feedbackDetails.length+1);
    avgRating=avgRating.toFixed(2);
    /*Calculating average feedback end*/
    console.log("average:"+ avgRating);
    PurchasedPdt.update({pdtCode:feedbackData.productId},{$set:{"avgFeedback":avgRating}}).exec(
      function(err,ret){
        console.log("avg updated");
    });
    ProductDetails.update({pdtCode:feedbackData.productId},{$push:{"feedbackDetails":{user:session.username,body:feedbackData.feedback,rating:feedbackData.rating,updatedAt: Date.now()}}},function(err,data){
      res.send(data);
    });
  });

});

app.post('/dashboard',function(req,res){
  //var pdtDetails=[];
  PurchasedPdt.find(function(err,data){
    ProductDetails.find(function(err,feedbackDetails){
      var retObj={feedbackDetails:feedbackDetails,productDetails:data};
      res.send(retObj);
    });
  });

});

app.post('/discontinue',function(req,res){
  console.log("prodID");
  console.log(req.body.pdtCode);
  PurchasedPdt.update({pdtCode:req.body.pdtCode},{$set:{"isDiscontinued":true}}).exec(
    function(err,ret){
      console.log("pdt discontinued");
      res.send(ret);
  });
});

app.post('/getChatData',function(req,res){
  console.log(req.body);
  ChatDataSchema.find(function(err,data){
    res.send(data);
  });
});

app.post('/productDetails/getChatData',function(req,res){
  ChatDataSchema.find(function(err,data){
    res.send(data);
  });
});

app.post('/logout',function(req,res){
  console.log("inside  logout");
  res.redirect('/');
})
