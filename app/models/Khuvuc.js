'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
	ten: String,
	khuvuccha: {type: mongoose.Schema.Types.ObjectId, ref: 'Khuvuc'}
});

module.exports = mongoose.model('Khuvuc', schema);
/*
module.exports.createKhuvuc = function(newKhuvuc,callback){
		newKhuvuc.save(callback);
}
module.exports.getallKhuvucTP = function(callback){
	Khuvuc.find({"khuvuccha":null}, callback);	
}
module.exports.getallKhuvucQH = function(idcha,callback){
	Khuvuc.find({"khuvuccha":idcha}, callback);	
}*/