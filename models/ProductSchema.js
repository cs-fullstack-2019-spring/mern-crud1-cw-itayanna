var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
    productID: String,
    price: String,
    quantity:Number
});

module.exports = mongoose.model('ProductSchema', ProductSchema);