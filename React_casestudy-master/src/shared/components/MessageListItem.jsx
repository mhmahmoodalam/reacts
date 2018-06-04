var React = require('react');
var createReactClass = require('create-react-class');
var propTypes = require('prop-types');

var MessageListItem = createReactClass({
  render: function() {
    var message = this.props.message;
    //console.log(message);
    return (
      <li className="message-list-item">
        <h5 className="message-author-name">{message.authorName}</h5>
        <div className="message-time">
        </div>
        <div className="message-text">{message.text}</div>
      </li>
    );
  }

});

MessageListItem.propTypes= {
  message: propTypes.object
}

module.exports = MessageListItem;
