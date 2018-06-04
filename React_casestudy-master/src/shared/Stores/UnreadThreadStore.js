var ChatAppDispatcher = require('../Dispatcher/dispatcher.js').AppDispatcher;
var ChatConstants = require('../Constants/ChatConstants');
var EventEmitter = require('events').EventEmitter;
var MessageStore = require('../Stores/MessageStore');
var ThreadStore = require('../Stores/ThreadStore');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var UnreadThreadStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getCount: function() {
    var threads = ThreadStore.getAll();
    var unreadCount = 0;
    for (var id in threads) {
      if (!threads[id].lastMessage.isRead) {
        unreadCount++;
      }
    }
    return unreadCount;
  }

});

UnreadThreadStore.dispatchToken = ChatAppDispatcher.register(function(payload) {
  ChatAppDispatcher.waitFor([
    ThreadStore.dispatchToken,
    MessageStore.dispatchToken
  ]);

  switch (payload.action.actionType) {

    case ChatConstants.CLICK_THREAD:
      UnreadThreadStore.emitChange();
      break;

    case ChatConstants.RECEIVE_RAW_MESSAGES:
      UnreadThreadStore.emitChange();
      break;

    default:
      // do nothing
  }
});

module.exports = UnreadThreadStore;
