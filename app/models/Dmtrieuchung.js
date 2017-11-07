'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
	ten: String
});
module.exports = mongoose.model('Dmtrieuchung', schema);
/*
module.exports.createCategory = function(newCategory,callback){
		newCategory.save(callback);
}
module.exports.getallCategory = function(callback){
	Dmtrieuchung.find({}, callback);	
}*/