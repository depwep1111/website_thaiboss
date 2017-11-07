'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
	ten: String,
	//ketoa: [{idthuoc: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'}}],
	chandoan: [{idtrieuchung: {type: mongoose.Schema.Types.ObjectId, ref: 'Trieuchung'}}],
	trieuchung: String,
	dieutri: String
});
module.exports = mongoose.model('Benhly', schema);
/*
module.exports.createBenhly = function(newBenhly,callback){
		newBenhly.save(callback);
}
module.exports.ketoa = function(id,ketoa, callback){
	Benhly.update({_id:id}, {$push:{"ketoa":ketoa}},callback);
}
module.exports.chandoan = function(id,chandoan, callback){
	Benhly.update({_id:id}, {$push:{"chandoan":chandoan}},callback);
}
module.exports.getallBenhly = function(callback){
	Benhly.find({}, callback);
	
}
module.exports.getBenhlyById = function(id, callback){
	Benhly.findById(id, callback);
}
module.exports.updateBenh = function(id,trieuchung,dieutri, callback){
	Benhly.update({_id:id}, {$set:{"trieuchung":trieuchung,"dieutri":dieutri}},callback);
}*/

