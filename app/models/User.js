'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
	username: String,
	password: {type: String, bcrypt:true},
	email:String,
	name: String,
	sdt: String,
	facebook: {id:String},
	google: {id:String}
	// ngày tạo
});
module.exports = mongoose.model('User', schema);
/*

module.exports.createUser = function(newUser,callback){
	bcrypt.hash(newUser.password, 10, function(err, hash){
		if(err) throw err;
		newUser.password = hash;
		newUser.save(callback);
	});
	
}
module.exports.checkEmail = function(email, callback){

var query = {email:email};
	User.findOne(query, callback);

}
module.exports.checkUsername = function(username, callback){

var query = {username:username};
	User.findOne(query, callback);
	
}
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}
module.exports.compare = function(password,hash, callback){
	bcrypt.compare(password,hash,function(err,ismatch){
		if(err) throw callback(err);
		callback(null,ismatch);

	});
}
*/