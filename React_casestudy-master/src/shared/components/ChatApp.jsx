import React from 'react';
import MessageSection from './MessageSection';
import ThreadSection from './ThreadSection';

class ChatApp extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){

  }
  render(){
    return(
      <div>
        {sessionStorage.getItem("role")=="customer"?
        <div className="chatapp row">
          <div className="col-sm-12" style={{"padding":"0"}}>
            <MessageSection />
          </div>
        </div>:
        <div className="chatapp row">
          <div className="col-sm-4" style={{"padding":"0"}}>
            <ThreadSection />
          </div>
          <div className="col-sm-8" style={{"padding":"0"}}>
            <MessageSection />
          </div>
        </div>}
        </div>

    )
  }
}

export default ChatApp;
