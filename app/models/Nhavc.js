'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
	ten: String
});

module.exports = mongoose.model('Nhavc', schema);
/*
module.exports.createNhavc = function(newNhavc,callback){
		newNhavc.save(callback);
}
module.exports.getallNVC = function(callback){
	Nhavc.find({}, callback);	
}
module.exports.getNhavcById = function(id, callback){
	Nhavc.findById(id, callback);
}*/