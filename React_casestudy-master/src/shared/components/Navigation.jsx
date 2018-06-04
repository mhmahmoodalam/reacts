var React = require('react');
var createReactClass = require('create-react-class');
var Navbar = require('react-bootstrap/lib/Navbar');
var NavItem = require('react-bootstrap/lib/NavItem');
var Nav = require('react-bootstrap/lib/Nav');
var Button = require('react-bootstrap/lib/Button');
var Form = require('react-bootstrap/lib/Form');
var Glyphicon = require("react-bootstrap/lib/Glyphicon");
import Action from './../Actions/Action.jsx';
import { Link } from 'react-router';
import AppStore from './../Stores/ApplicationStore.js';
import {withRouter} from  'react-router';

var Navigation = createReactClass({
  onLogout: function () {
    event.preventDefault();
    alert("from logout",this.props);
    this.props.history.push('/');
    Action.Logout();
    
  },
  onFnf() {
    alert("This functionality is yet to be implemented.");
  },
  render: function () {
    return (
      <div>
        <Navbar inverse style={{ "height": "75px" }}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><img height="75px" src="../Images/csp1.png" /></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullRight>
              <Form>
                <Button type="submit" bsStyle="link" onClick={this.onLogout}>Logout&nbsp;<Glyphicon glyph="log-out" /></Button>
              </Form>
            </Navbar.Form>
            <Navbar.Form pullRight>
              <Button type="submit" bsStyle="link">hi {sessionStorage.getItem("username")}&nbsp;&nbsp;<Glyphicon glyph="user" /></Button>
            </Navbar.Form>
            <Navbar.Form pullRight>
              <Form>
                <Button onClick={this.onFnf} type="button" bsStyle="link" >Notifications &nbsp;<Glyphicon glyph="globe" /></Button>
              </Form>
            </Navbar.Form>
            <Navbar.Form pullRight>
              <Form>
                <Button onClick={this.onFnf} type="button" bsStyle="link" >Download App&nbsp;<Glyphicon glyph="download-alt" /></Button>
              </Form>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
});

module.exports.Navigation = withRouter(Navigation);
