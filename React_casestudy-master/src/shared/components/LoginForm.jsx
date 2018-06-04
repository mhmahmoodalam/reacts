import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.jsx';

class LoginForm extends React.Component{
  static getCredentials(){
    return [{request : "getCredentials"}];
  }
  render(){
    return(
    <div>
      <div>
        <a href="/" style={{"paddingLeft":"15px"}}><img width="auto" height="75px" src="Images/csp1.png"/></a>
      </div>
      <div className="jumbotron">
        <div className="container">
          <h1>Customer Service Portal</h1>
          <p>Your one point contact for issues related to the purchased products.</p>
        </div>
      </div>
      <div className={"container"} id="wrap">
        <div className={"row bgClass"}>
          <div className={"col-md-5 col-md-offset-7"}>
            <Login/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default LoginForm;
