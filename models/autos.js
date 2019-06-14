var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var AutosMazda= Schema({
	nombre:String,
	foto:String
});


module.exports=mongoose.model('Mazda',AutosMazda);
