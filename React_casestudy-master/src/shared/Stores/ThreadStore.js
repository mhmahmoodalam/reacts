var ChatAppDispatcher = require('../Dispatcher/dispatcher.js').AppDispatcher;
var ChatConstants = require('../Constants/ChatConstants');
var ChatMessageUtils = require('../Helper/ChatMessageUtils');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
import io from 'socket.io-client';
var socket=io("http://localhost:4000");

var CHANGE_EVENT = 'change';

var _currentID = null;
var _threads = {};

var ThreadStore = assign({}, EventEmitter.prototype, {

  init: function(rawMessages) {
    //this.socket=socket;
    console.log("from threadstore init");
    console.log(rawMessages);
    rawMessages.forEach(function(msg){
      if(msg.id.indexOf("$")==msg.id.length-1){
        _threads={};
      }
    })
    rawMessages.forEach(function(message) {
      console.log("inside foreach init method");
      console.log(message);
      var threadID = message.threadID;
      var thread = _threads[threadID];
      if (thread && thread.lastMessage.timestamp > message.timestamp) {
        return;
      }
      _threads[threadID] = {
        id: threadID,
        name: message.threadName,
        lastMessage: ChatMessageUtils.convertRawMessage(message, _currentID)
      };
    }, this);
    if(rawMessages.length==0){
      console.log("inside 0 rawmsgs threadstore ");
      _threads={};
    }
    if(rawMessages.length!=0){

      if (!_currentID) {
        var allChrono = this.getAllChrono();
        console.log("from threadstore null currentThreadID");
        console.log(allChrono);
        _currentID = allChrono[allChrono.length - 1].id;
      }
      _threads[_currentID].lastMessage.isRead = true;
    }
    else{
      _currentID=null;
    }
  },

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
    //console.log(id);
    return _threads[id];
  },
  getAll: function() {
    return _threads;
  },
  getAllChrono: function() {
    var orderedThreads = [];
    console.log("from getAllChrono")
    console.log(_threads);
    for (var id in _threads) {
      var thread = _threads[id];
      orderedThreads.push(thread);
    }
    orderedThreads.sort(function(a, b) {
      if (a.lastMessage.date < b.lastMessage.date) {
        return -1;
      } else if (a.lastMessage.date > b.lastMessage.date) {
        return 1;
      }
      return 0;
    });
    return orderedThreads;
  },

  getCurrentID: function() {
    return _currentID;
  },

  getCurrent: function() {
    console.log("inside threadstore getcurrent");
    console.log(_currentID);
    if(sessionStorage.getItem("role")=="customer"){
      _currentID="t_krishna";
    }
    return this.get(this.getCurrentID());
  }

});

ThreadStore.dispatchToken =ChatAppDispatcher.register(function(payload) {

  switch(payload.action.actionType) {

    case ChatConstants.CLICK_THREAD:
      console.log("from threadstore CLICK_THREAD")
      _currentID = payload.action.threadID;
      _threads[_currentID].lastMessage.isRead = true;
      ThreadStore.emitChange();
      break;

    case ChatConstants.RECEIVE_RAW_MESSAGES:
    console.log("from threadstore RECEIVE_RAW_MESSAGES")
      console.log(payload.action.data);
      ThreadStore.init(payload.action.data);
      ThreadStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = ThreadStore;
