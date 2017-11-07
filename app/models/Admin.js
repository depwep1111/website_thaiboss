'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
	username: String,
	password: {type: String, bcrypt:true},
	email:String
});

module.exports = mongoose.model('Admin', schema);
/*
module.exports.checkUsername = function(username, callback){

var query = {username:username};
	Admin.findOne(query, callback);
	
}
module.exports.checkEmail = function(email, callback){

var query = {email:email};
	Admin.findOne(query, callback);

}
module.exports.createAdmin = function(newAdmin,callback){
	bcrypt.hash(newAdmin.password, 10, function(err, hash){
		if(err) throw err;
		newAdmin.password = hash;
		newAdmin.save(callback);
	});
	
}
module.exports.ActiveAdmin = function(id,callback){
	Admin.update({_id:id},{$set:{isActive:"true"}},callback);
}
module.exports.getAdminById = function(id, callback){
	Admin.findById(id, callback);
}
module.exports.compare = function(password,hash, callback){
	bcrypt.compare(password,hash,function(err,ismatch){
		if(err) throw callback(err);
		callback(null,ismatch);

	});
}

module.exports.updateImage = function(id, avatar,callback){
	Admin.update({_id:id},{$set:{"avatar":avatar}},callback);
}

module.exports.updateAdmin = function(id,name,birth,phone,address,callback){
	Admin.update({_id:id},{$set:{"name":name,"birth":birth,"phone":phone,"address":address}},callback);
}

module.exports.updatePassword = function(id, password,callback){
	bcrypt.hash(password, 10, function(err, hash){
		if(err) throw err;
		password = hash;
		Admin.update({_id:id},{$set:{"password":password}},callback);
	});
	
}

module.exports.deleteAdmin = function(id,callback){
	Admin.remove({_id:id},callback);
}
module.exports.checkLock = function(id,callback){
	Admin.find({_id:id,"lock":true}, callback);
}
module.exports.lockUser = function(id,callback){
	Admin.update({_id:id},{$set:{"lock":true}},callback);
}
module.exports.unlockUser = function(id,callback){
	Admin.update({_id:id},{$set:{"lock":false}},callback);
}
module.exports.notification = function(notification,callback){
	Admin.update({_id:"586dc1b2093f9c25e8790c5d"},{$push:{notification}},callback);
}
*/