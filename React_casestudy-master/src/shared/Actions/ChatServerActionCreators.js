var ChatAppDispatcher = require('./../Dispatcher/dispatcher.js').AppDispatcher;
var ChatConstants = require('./../Constants/ChatConstants');

//var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

  receiveAll: function(rawMessages) {
    console.log("inside chat server action creators");
    console.log(rawMessages);
    ChatAppDispatcher.handleAction({
      actionType: ChatConstants.RECEIVE_RAW_MESSAGES,
      data: rawMessages
    });
  },

  receiveCreatedMessage: function(createdMessage) {
    ChatAppDispatcher.handleAction({
      actionType: ChatConstants.RECEIVE_RAW_CREATED_MESSAGE,
      data: createdMessage
    });
  }

};
