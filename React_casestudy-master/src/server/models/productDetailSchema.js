var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ProductDetailSchema = new Schema({
  pdtCode:String,
  feedbackDetails:[{user:String,body:String,rating:Number,updatedAt: {
     type : Date,
     default : Date.now
   }}]
});


module.exports=mongoose.model("ProductDetailsSchema",ProductDetailSchema,"ProductsDetail");
