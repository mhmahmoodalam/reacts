var React=require('react');
var Rater =require('./Rater.jsx').Rater;
var ProductDetails = require('./ProductDetails.jsx');
import {Link} from 'react-router';

class ProductDisc extends React.Component{
  constructor(){
    super();
    this.state={
      rating:'',
      prodId:""
    };
    this.handleDisc=this.handleDisc.bind(this);
  }
  handleDisc(){
    this.props.onDisc(this.state.prodId);
  }
  componentDidMount(){
    this.setState({rating:this.props.rating,prodId:this.props.pdtId});
  }
  render(){
    return(
      <div>
        <div className={"thumbnail"}>
          <img src={this.props.img} className={"img img-rounded img-responsive"}/>
          <div className={"caption"} style={{"textAlign":"center"}}>
              <a href="#"><h3>{this.props.name}</h3></a>
              <Rater value={this.props.rating} maxlength="6"/>
              <p className={"description"}>Average rating for the product is {this.props.rating}/5.</p>
              {this.props.status ? <h5 style={{"color":"red","font-weight":"bold"}}>The product is discontinued.</h5> : <button onClick={this.handleDisc} className={"btn btn-danger"} type="button" disabled={!(parseInt(this.props.rating)<=2.5)}>Discontinue the product</button>}
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDisc;
