var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ChatDetailsSchema = new Schema({
  id: String,
  threadID: String,
  threadName: String,
  authorName: String,
  text: String,
  timestamp: Date
});


module.exports=mongoose.model("ChatDetailsSchema",ChatDetailsSchema);
