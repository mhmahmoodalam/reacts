import React from 'react';
import Action from './../Actions/Action.jsx';
import {Router, Link, browserHistory} from 'react-router';
import ApplicationStore from './../Stores/ApplicationStore';
import {Button,Form,FormGroup,Col,ControlLabel,FormControl} from 'react-bootstrap';
import {withRouter} from  'react-router';

class Login extends React.Component{
  constructor(props,context){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleUsernameChange=this.handleUsernameChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
    this.onFnf=this.onFnf.bind(this);
    this.state={username:"",password:"",authenticated:ApplicationStore.isAuthenticated};
  }
  onFnf(){
    alert("This functionality is yet to be implemented.")
  }
  handleUsernameChange(e){
    this.setState({username:e.target.value});
  }
  handlePasswordChange(e){
    this.setState({password:e.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    let user = {'username':this.state.username,
             'password':this.state.password};
    Action.Login(user);
    console.log("from login compoennt",this.props);
    if(this.state.authenticated && sessionStorage.getItem('role')=="customer"){
      this.props.history.push('/purchasedItems');
    }
    else{
      this.props.history.push('/dashboard');
    }
  }
  componentDidMount(){
    document.body.style.background="url('Images/bg2.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize="cover";
  }
  render(){
    
    return(
    <div className="form-layout">
      <div className={"panel-heading"}>
        <div className="panel-heading-left">
          <h3>Sign up now</h3>
          <p>Get access to your orders and chat for support.</p>
        </div>
        <div className="panel-heading-right">
          <span className="glyphicon glyphicon-pencil"></span>
        </div>
      </div>
      <div id="divLogin" className={"bgImage panel-body"}>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalUsername">
            <Col sm={12}>
              <FormControl bsSize="lg" value={this.state.username} name="username"
               onChange={this.handleUsernameChange} ref="username" type="text" placeholder="Enter Username" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col sm={12}>
              <FormControl bsSize="lg" value={this.state.password} name="password"
              onChange={this.handlePasswordChange} ref="password" type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={4}>
                <Button bsStyle="success" bsSize="lg" block type="submit">
                  Sign in
                </Button>
            </Col>
            <Col smOffset={2} sm={5}>
              <Button bsStyle="link" bsSize="lg" block onClick={this.onFnf}>
                Terms and Conditions
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
      </div>
    );
  }
}
export default withRouter(Login);
