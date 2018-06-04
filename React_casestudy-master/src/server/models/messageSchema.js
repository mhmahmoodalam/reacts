var mongoose = require("mongoose");
var Schema=mongoose.Schema;

var MessageSchema = mongoose.Schema({
  id:String,
  channelId:String,
  text:String,
  user:Object,
  time:String
});

module.exports=mongoose.model('Message',MessageSchema);
