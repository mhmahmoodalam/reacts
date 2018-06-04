var ChatAppDispatcher = require('../Dispatcher/dispatcher.js').AppDispatcher;
var ChatConstants = require('../Constants/ChatConstants');
var ChatMessageUtils = require('../Helper/ChatMessageUtils');
var EventEmitter = require('events').EventEmitter;
var ThreadStore = require('../Stores/ThreadStore');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _messages = {};

function _addMessages(rawMessages) {
  rawMessages.forEach(function(message) {
    if (!_messages[message.id]) {
      _messages[message.id] = ChatMessageUtils.convertRawMessage(
        message,
        ThreadStore.getCurrentID()
      );
    }
  });
}

function _markAllInThreadRead(threadID) {
  for (var id in _messages) {
    if (_messages[id].threadID === threadID) {
      _messages[id].isRead = true;
    }
  }
}

var MessageStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  get: function(id) {
    return _messages[id];
  },

  getAll: function() {
    return _messages;
  },
  getAllForThread: function(threadID) {
    var threadMessages = [];
    for (var id in _messages) {
      if (_messages[id].threadID === threadID) {
        threadMessages.push(_messages[id]);
      }
    }
    threadMessages.sort(function(a, b) {
      if (a.date < b.date) {
        return -1;
      } else if (a.date > b.date) {
        return 1;
      }
      return 0;
    });
    return threadMessages;
  },

  getAllForCurrentThread: function() {
    return this.getAllForThread(ThreadStore.getCurrentID());
  }

});

MessageStore.dispatchToken =ChatAppDispatcher.register(function(payload) {

  switch(payload.action.actionType) {

    case ChatConstants.CLICK_THREAD:
    console.log("inside msg store click thread method");
      ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
      _markAllInThreadRead(ThreadStore.getCurrentID());
      MessageStore.emitChange();
      break;

    case ChatConstants.CREATE_MESSAGE:
      console.log("inside message store create msg method");
      var message = ChatMessageUtils.getCreatedMessageData(
        payload.action.data,
        payload.action.currentThreadID
      );
      _messages[message.id] = message;
      MessageStore.emitChange();
      break;

    case ChatConstants.RECEIVE_RAW_MESSAGES:
      console.log("inside message store receive raw msg method");
      _addMessages(payload.action.data);
      ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
      _markAllInThreadRead(ThreadStore.getCurrentID());
      MessageStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = MessageStore;
