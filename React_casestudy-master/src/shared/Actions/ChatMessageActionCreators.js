var ChatAppDispatcher = require('../Dispatcher/dispatcher.js').AppDispatcher;
var ChatConstants = require('../constants/ChatConstants');
var ChatWebAPIUtils = require('../Helper/ChatWebAPIUtils');
var ChatMessageUtils = require('../Helper/ChatMessageUtils');

//var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

  createMessage: function(text, currentThreadID) {
    console.log("from message actionscreators createMessage method");
    ChatAppDispatcher.handleAction({
      actionType: ChatConstants.CREATE_MESSAGE,
      data: text,
      currentThreadID: currentThreadID
    });
    var message = ChatMessageUtils.getCreatedMessageData(text, currentThreadID);
    ChatWebAPIUtils.createMessage(message);
  }

};
