var React=require('react');
import Product from './Product.jsx';
var Navigation = require('./Navigation.jsx').Navigation;
var Footer =require('./Footer.jsx');
import Action from './../Actions/Action';
import AppStore from './../Stores/ApplicationStore';
var MessageSection = require('./MessageSection');
var ThreadSection = require('./ThreadSection');
var ChatExampleData = require('./ChatExampleData');
var ChatWebAPIUtils = require('./../Helper/ChatWebAPIUtils');
import ChatApp from './ChatApp';

function getProductState(){
  let user = {'username':sessionStorage.getItem("username")};
  var ret= AppStore.FetchPurchasedItems(user);
  return ret
}

class  PurchasedItems extends React.Component{
  constructor(props){
    super(props);
    this.state={
      products:null
    };
  }
  componentWillMount(){
    //called before render method.
    this.setState({products:getProductState()});
    
    //ChatExampleData.init(); // load example data into localstorage
    var ret=ChatWebAPIUtils.getAllMessages();
    console.log(ret);
  }
  componentDidMount(){
    //called after render method.
    document.body.style.backgroundImage="none";
    //AppStore.addChangeListener(this._onChange);
    setInterval(this._onChange,1000);
  }
  render(){
    var items=[];
    console.log("from render",this.state.products);
    if (this.state.products) {
      this.state.products.forEach(function(item,index){
          items.push(<div key={item._id} className={"col-sm-6 col-md-6"}><Product pid={item._id} price={item.pdtPrice} name={item.pdtName}  desc={item.pdtDescription} img={item.pdtImg} rating={item.avgFeedback} status={item.isDiscontinued}/></div>);
      }.bind(this));
    }
    return(
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
  }

  _onChange(){
      this.setState({products:getProductState()});
  }
}

export default PurchasedItems;
