var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UserlistSchema= new Schema({
  slNo:Number,
  username:String,
  password:String,
  role:String,
  availabilityStatus:String
});

module.exports=mongoose.model("Userlist",UserlistSchema);
