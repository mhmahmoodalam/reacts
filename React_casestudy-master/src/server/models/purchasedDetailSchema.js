var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var PurchasedSchema = new Schema({
  pdtCode:String,
  purchasedUser:String
});

module.exports=mongoose.model("PurchasedSchema",PurchasedSchema);
