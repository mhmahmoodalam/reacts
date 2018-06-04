var ChatThreadActionCreators = require('../Actions/ChatThreadActionCreators');
var React = require('react');
var createReactClass = require('create-react-class');
var classNames = require('classnames');
var propTypes = require('prop-types');

var ThreadListItem = createReactClass({


  render: function() {
    var thread = this.props.thread;
    var lastMessage = thread.lastMessage;
    return (
      <li
        className={classNames({
          'thread-list-item': true,
          'active': thread.id === this.props.currentThreadID
        })}
        onClick={this._onClick}>
        <h5 className="thread-name">{thread.name}</h5>
        <div className="thread-time">
          {lastMessage.date.toLocaleTimeString()}
        </div>
        <div className="thread-last-message">
          {lastMessage.text.substr(0,15)+"..."}
        </div>
      </li>
    );
  },

  _onClick: function() {
    ChatThreadActionCreators.clickThread(this.props.thread.id);
  }

});

ThreadListItem.propTypes={
  thread: propTypes.object,
  currentThreadID: propTypes.string
}

module.exports = ThreadListItem;
