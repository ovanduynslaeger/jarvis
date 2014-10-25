//setup Dependencies
var mongoose = require('mongoose');


var CategorySchema = new mongoose.Schema({
    code: String,
    level: String,
    name: String,
    photo: String,
    maincolor: String,
    secondcolor: String
});

var categories = mongoose.model('categories', CategorySchema);

exports.findAll = function (cb) {
    categories.find({}, {_id:0}).exec(cb);
};

exports.save = function(device, cb){
    categories.upsert({code:device.code}, device).exec(this.findByCode(device.code, cb));
};