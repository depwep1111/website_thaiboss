'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
	body: String,
	name: String,
	email: String,
	status: {type: Boolean, default:false},
	time: {type: Date, default:Date.now}
});
module.exports = mongoose.model('Feedback', schema);
/*
var Feedback = module.exports = conn.model('Feedback',feedbackSchema);

module.exports.createContact = function(newContact,callback){
		newContact.save(callback);
}

module.exports.feedback = function(id,callback){
	Feedback.update({_id:id},{$set:{"status":true}},callback);
}*/