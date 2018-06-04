var React = require('react');
var createReactClass = require('create-react-class');
var MessageSection = require('./MessageSection');
var ThreadSection = require('./ThreadSection');
var Navigation = require('./Navigation.jsx').Navigation;
var Footer =require('./Footer.jsx');
var AppStore =require("./../Stores/ApplicationStore");
var ProdDisc= require("./ProductDisc");
var Action=require("./../Actions/Action");
var ChatExampleData = require('./ChatExampleData');
var ChatWebAPIUtils = require('./../Helper/ChatWebAPIUtils');
var ThreadStore=require("./../Stores/ThreadStore");
import ChatApp from './ChatApp';

function getDashboardNotification(){
  var notifications=AppStore.FetchAdminNotifications();
  return {
    Notifications:notifications
  };
}

var Dashboard = createReactClass({
  getInitialState(){
    var obj=getDashboardNotification();
    return obj;
  },
  componentDidMount(){
    document.body.style.backgroundImage="none";
    AppStore.addChangeListener(this._onChange);

  },
  componentWillMount(){
    var ret=ChatWebAPIUtils.getAllMessages();
  },
  componentWillUnmount(){
    AppStore.removeChangeListener(this._onChange);
  },
  handleDiscontinue:function(pdtCode){
    var productCode={"pdtCode":pdtCode};
    Action.DiscontinueProduct(productCode);
  },
  render: function() {
    var items=[];
    this.state.Notifications.productDetails.forEach(function(item){
        items.push(<div className={"col-sm-6"}><ProdDisc key={item.pdtCode} status={item.isDiscontinued} onDisc={this.handleDiscontinue}  pdtId={item.pdtCode} img={item.pdtImg} name={item.pdtName} rating={item.avgFeedback}/></div>);
    },this);
    return (
      <div>
        <Navigation/>
        <div  className="container-fluid">
          <div className="row">
            <div className="col-sm-7">
              {items}
            </div>
            <div className="col-sm-5">
              <ChatApp />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  },
  _onChange(){
    let stateObj=getDashboardNotification();
    //console.log(stateObj);
    this.setState(stateObj);
    //console.log("stateObj Notifications");
    //console.log(this.state.Notifications);
  }
});

module.exports = Dashboard;
