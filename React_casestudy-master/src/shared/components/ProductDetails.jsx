import React from 'react';
import Product from './Product.jsx';
var Navigation = require('./Navigation.jsx').Navigation;
var Footer =require('./Footer.jsx');
import FeedbackComp from './FeedbackComp.jsx';
import AppStore from './../Stores/ApplicationStore';
import Action from './../Actions/Action';
var MessageSection = require('./MessageSection');
var ThreadSection = require('./ThreadSection');
var ChatExampleData = require('./ChatExampleData');
var ChatWebAPIUtils = require('./../Helper/ChatWebAPIUtils');
var productId;
import ChatApp from './ChatApp';

function getProductDetailsState(){
  let params={"pdtId":productId};
  var retData= AppStore.FetchProductDetails(params);
  return {
    productDetails:retData.pdtDetails,
    feedbackDetails:retData.fbDetails.feedbackDetails,
    productId:retData.fbDetails.pdtCode
  };
}

class ProductDetails extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmitFeedback=this.handleSubmitFeedback.bind(this);
    this._onChange=this._onChange.bind(this);
    this.state={
      productDetails:{},
      feedbackDetails:[],
      pdtId:""
    };
  }
  componentWillMount(){
    ChatExampleData.init(); // load example data into localstorage
    var ret=ChatWebAPIUtils.getAllMessages();
    productId=this.props.match.params.id;
    var stateObj=getProductDetailsState();
    this.setState({productDetails:stateObj.productDetails,feedbackDetails:stateObj.feedbackDetails,pdtId:stateObj.productId});
  }
  handleSubmitFeedback(rating,feedback){
    let fbData= {'feedback':feedback,
                'rating':rating,
                'productId':this.state.pdtId};
    Action.SubmitFeedback(fbData);
  }
  componentDidMount(){
    AppStore.addChangeListener(this._onChange);
    //setInterval(this._onChange,1000);
  }
  componentWillUnmount(){
    AppStore.removeChangeListener(this._onChange);
  }
  render() {
    return(
      <div>
        <Navigation/>
        <div className={"container-fluid"}>
          <div className={"row"} style={{"maxWidth":"100%"}}>
            <div className={"col-sm-3"}>
              <Product status={this.state.productDetails.isDiscontinued}  pid={this.state.productDetails._id} price={this.state.productDetails.pdtPrice} name={this.state.productDetails.pdtName} desc={this.state.productDetails.pdtDescription} img={this.state.productDetails.pdtImg} rating={this.state.productDetails.avgFeedback}/>
            </div>
            <div className={"col-sm-4"}>
              {this.state.productDetails.isDiscontinued}
              <FeedbackComp status={this.state.productDetails.isDiscontinued} feedbacks={this.state.feedbackDetails} pdtCode={this.state.pdtId} onFeedback={this.handleSubmitFeedback}/>
            </div>
            <div className={"col-sm-5"}>
              <ChatApp />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )}

    _onChange(){
      let stateObj=getProductDetailsState();
      this.setState({productDetails:stateObj.productDetails,feedbackDetails:stateObj.feedbackDetails,pdtId:stateObj.productId});
    }
}



export default ProductDetails;
