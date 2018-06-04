var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ProductSchema = new Schema({
  pdtName:String,
  pdtPrice:Number,
  pdtCode:String,
  pdtDescription:String,
  pdtCategory:String,
  avgFeedback:Number,
  purchasedUser:String,
  pdtImg:String,
  isDiscontinued:Boolean
});

module.exports=mongoose.model("ProductSchema",ProductSchema,"Products");
