var mongoose =require('mongoose');
var Schema =mongoose.Schema;

var messageSchema = new Schema({
    text:{type:String, required:true},
    user:{type:String, required:true},
    added:new Date(),
    
})

module.exports=mongoose.model('Message',messageSchema)