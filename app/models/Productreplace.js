'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
	id_sp: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
	id_spthaythe: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
	tile: Number
});
module.exports = mongoose.model('Productreplace', schema);