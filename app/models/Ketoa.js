'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
	doTuoiTren: Number,
	doTuoiDuoi: Number,
	coThai: Boolean,
	daDay: Boolean,
	idBenh: {type: mongoose.Schema.Types.ObjectId, ref: 'Benhly'},
	thuoc:[{idthuoc: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},lieudung:String,soluongmacdinh:Number}],
	ngaytoithieu: Number,
	ngaytoida: Number
});
module.exports = mongoose.model('Ketoa', schema);
/*
module.exports.createKetoa = function(newBenhly,callback){
		newBenhly.save(callback);
}
module.exports.ketoa = function(id,thuoc, callback){
	Ketoa.update({_id:id}, {$push:{"thuoc":thuoc}},callback);
}
module.exports.getThuoc = function(idBenh,callback){
	Ketoa.find({"idBenh":idBenh}, callback);
	
}
module.exports.getToaThuocTuoi = function(idBenh,doTuoi,callback){
	Ketoa.find({"idBenh":idBenh,"doTuoiTren":{$lte:doTuoi},"doTuoiDuoi":{$gte:doTuoi}}, callback);
	
}
module.exports.getToaThuocDaDay = function(idBenh,callback){
	Ketoa.find({"idBenh":idBenh,"daDay":true}, callback);
	
}
module.exports.getToaThuocCoThai = function(idBenh,callback){
	Ketoa.find({"idBenh":idBenh,"coThai":true}, callback);
	
}
*/