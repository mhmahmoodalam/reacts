var MessageComposer = require('./MessageComposer');
var MessageListItem = require('./MessageListItem');
var MessageStore = require('../Stores/MessageStore');
var React = require('react');
var createReactClass = require('create-react-class');
var ThreadStore = require('../Stores/ThreadStore');

function getStateFromStores() {
  return {
    messages: MessageStore.getAllForCurrentThread(),
    thread: ThreadStore.getCurrent()
  };
}

function getMessageListItem(message) {
  return (
    <MessageListItem
      key={message.id}
      message={message}
    />
  );
}

var MessageSection =createReactClass({

  getInitialState: function() {
    var ret=getStateFromStores();
    return ret;
  },

  componentDidMount: function() {
    this._scrollToBottom();
    MessageStore.addChangeListener(this._onChange);
    ThreadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    MessageStore.removeChangeListener(this._onChange);
    ThreadStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var messageListItems = this.state.messages.map(getMessageListItem);
    console.log("from messagesection");
    console.log(this.state.thread);
    return (
      <div className="message-section" style={{"width":"100%"}}>
        {this.state.thread && sessionStorage.getItem("role")=="customer"?<div className="chat-notify">&nbsp;&nbsp;Need any help regarding the products purchased..? Ask here</div>:null}
        <ul className="message-list" ref="messageList">
          {messageListItems}
        </ul>
        {this.state.thread?<MessageComposer threadID={this.state.thread.id}/>:
          <div className="alert alert-danger fade in">{sessionStorage.getItem('role')=="customer"?"Chat window will be enabled when the customer care admin is online." : "Chat window will be enabled when atleast one user is available"}
          </div>}
      </div>
    );
  },

  componentDidUpdate: function() {
    this._scrollToBottom();
  },

  _scrollToBottom: function() {
    var ul = this.refs.messageList;
    ul.scrollTop = ul.scrollHeight;
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = MessageSection;
