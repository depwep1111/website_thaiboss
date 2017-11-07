'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
	items: [{item: {type: mongoose.Schema.Types.ObjectId}, qty: Number, donvi: Number}],
	taltalQty: {type: Number, default:0},
	tatalPrice: {type: Number, default:0},
	user: {type: mongoose.Schema.Types.ObjectId},
	address: String,
	name: String,
	paymentID: String,
	sdt: String,
	email: String,
	tinhtrang: {type: Boolean, default:false},
	tienmat: {type: Boolean, default:false},
	success: Boolean,
	yeucauKH: String,
	dichvu: {type: mongoose.Schema.Types.ObjectId},
	time: Date
});

module.exports = mongoose.model('Cart', schema);
/*
module.exports.createCart = function(newCart,callback){
		newCart.save(callback);
}

module.exports.checkCart = function(id,idItem, callback){
	Cart.find({_id:id,"items.item":idItem},callback);
}

module.exports.updateCartTatal = function(id,idItem,taltalQty,tatalPrice,qty, callback){
	Cart.update({_id:id,"items.item":idItem},{$set:{"taltalQty":taltalQty, "tatalPrice":tatalPrice, "items.$.qty":qty}},callback);
}
module.exports.addItem = function(id,items, callback){
	Cart.update({_id:id}, {$push:{"items":items}},callback);
}
module.exports.getCartById = function(id, callback){
	Cart.findById(id, callback);
}
//
module.exports.updateCartUser = function(id,user,address,name,paymentID,sdt,email,yeucauKH,tinhtrang, callback){
	Cart.update({_id:id},{$set:{"user":user, "address":address, "name":name, "paymentID":paymentID, "sdt":sdt, "email":email,"yeucauKH":yeucauKH,"tinhtrang":tinhtrang}},callback);
}
module.exports.updateCartNoUser = function(id,address,name,paymentID,sdt,email,yeucauKH,tinhtrang, callback){
	Cart.update({_id:id},{$set:{"address":address, "name":name, "paymentID":paymentID, "sdt":sdt, "email":email,"yeucauKH":yeucauKH,"tinhtrang":tinhtrang}},callback);
}
module.exports.updateCartUserCash = function(id,user,address,name,sdt,email,yeucauKH,tinhtrang,tienmat, callback){
	Cart.update({_id:id},{$set:{"user":user, "address":address, "name":name, "sdt":sdt, "email":email,"yeucauKH":yeucauKH,"tinhtrang":tinhtrang, "tienmat":tienmat}},callback);
}
module.exports.updateCartNoUserCash = function(id,address,name,sdt,email,yeucauKH,tinhtrang,tienmat, callback){
	Cart.update({_id:id},{$set:{"address":address, "name":name, "sdt":sdt, "email":email,"yeucauKH":yeucauKH,"tinhtrang":tinhtrang,"tienmat":tienmat}},callback);
}
module.exports.getCartUser = function(user, callback){
	Cart.find({"user":user},callback);
}
module.exports.removeCartItem = function(id,item,taltalQty,tatalPrice, callback){
	Cart.update({_id:id},{$pull:{"items":{"item":item}},$set:{"taltalQty":taltalQty,"tatalPrice":tatalPrice}},callback);
}
module.exports.addfee = function(id,tatalPrice,dichvu, callback){
	Cart.update({_id:id}, {$set:{"tatalPrice":tatalPrice,"dichvu":dichvu}},callback);
}
module.exports.checkDVnull = function(id, callback){
	Cart.find({_id:id, "dichvu":null},callback);
}
module.exports.checkDVid = function(id,dichvu, callback){
	Cart.find({_id:id, "dichvu":dichvu},callback);
}*/