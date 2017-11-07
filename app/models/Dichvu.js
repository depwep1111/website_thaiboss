'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
	id_kv: {type: mongoose.Schema.Types.ObjectId, ref: 'Khuvuc'},
	id_nvc: {type: mongoose.Schema.Types.ObjectId, ref: 'Nhavc'},
	thoigiangh: String,
	gia: Number
});

module.exports = mongoose.model('Dichvu', schema);
/*
module.exports.createDichvu = function(newDichvu,callback){
		newDichvu.save(callback);
}
module.exports.getallDVByKV = function(id_kv,callback){
	Dichvu.find({"id_kv":id_kv}, callback);	
}
module.exports.getDichvuById = function(id, callback){
	Dichvu.findById(id, callback);
}
module.exports.getallDV = function(callback){
	Dichvu.find({}, callback);	
}*/