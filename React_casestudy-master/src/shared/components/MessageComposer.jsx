var ChatMessageActionCreators = require('../Actions/ChatMessageActionCreators');
var React = require('react');
var createReactClass = require('create-react-class');
var propTypes = require('prop-types');

var ENTER_KEY_CODE = 13;

var MessageComposer = createReactClass({
  getInitialState: function() {
    return {text: ''};
  },

  render: function() {
    return (
      <textarea
        className="message-composer"
        name="message"
        value={this.state.text}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
      />
    );
  },

  _onChange: function(event, value) {
    this.setState({text: event.target.value});
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      var text = this.state.text.trim();
      var threadId;
      if (text) {
        console.log("from message composer.jsx");
        //console.log(this.props.threadID.substr(2,this.props.threadID.length-1));
        //var receiver=this.props.threadID.substr(2,this.props.threadID.length-1);
        //var msg="/w "+receiver+text;

        ChatMessageActionCreators.createMessage(text, this.props.threadID);
      }
      this.setState({text: ''});
    }
  }

});

MessageComposer.propTypes= {
  threadID: propTypes.string.isRequired
},

module.exports = MessageComposer;
