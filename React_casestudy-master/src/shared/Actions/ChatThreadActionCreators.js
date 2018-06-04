var Dispatcher = require('../Dispatcher/dispatcher.js').AppDispatcher;
var ChatConstants = require('../constants/ChatConstants');

//var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

  clickThread: function(threadID) {
    Dispatcher.handleAction({
      actionType: ChatConstants.CLICK_THREAD,
      threadID: threadID
    });
  }

};
