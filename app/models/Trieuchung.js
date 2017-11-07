'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
	ten: String,
	id_danhmuc: {type: mongoose.Schema.Types.ObjectId, ref: 'Dmtrieuchung'},
	image: String
});
schema.index({"ten":"text"});
module.exports = mongoose.model('Trieuchung', schema);

/*
module.exports.createTrieuchung = function(newTrieuchung,callback){
		newTrieuchung.save(callback);
}
module.exports.getallTrieuchung = function(callback){
	Trieuchung.find({}, callback);
	
}
module.exports.updateTrieuchung = function(id,id_danhmuc,callback){
	Trieuchung.update({_id:id},{$set:{"id_danhmuc":id_danhmuc}}, callback);
	
}*/