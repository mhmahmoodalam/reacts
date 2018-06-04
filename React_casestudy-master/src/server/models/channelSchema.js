var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ChannelSchema= new Schema({
  name:{type:String,unique:true},
  id:String,
  private:Boolean,
  between:Array
});

module.exports=mongoose.model('Channel',ChannelSchema,"Channels");
