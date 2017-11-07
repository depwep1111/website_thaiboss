'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
	title: String,
	description: String,
	price: Number,
	image: String,
	gioithieu: String,
	donvi: String,
	soluong: Number,
	id_danhmuc: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
	tile: Number
});
schema.index({"title":"text"});
module.exports = mongoose.model('Product', schema);