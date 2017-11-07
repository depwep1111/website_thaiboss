'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
   ten:   {type: 'String', required: true}
});

module.exports = mongoose.model('Category', schema);