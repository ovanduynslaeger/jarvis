//setup Dependencies
var mongoose = require('mongoose');


var DeviceSchema = new mongoose.Schema({
    code: String,
    name: String,
    type: String,
    protocol: String,
    status: Number,
    publicId: String,
    photo: String,
    category: [String],
    sorting: Number,
    controls: [ {
        name: String,
        url: String,
        display: String,
        isStatefull: Boolean,
        status: Number,
        style: String
     } ]
});

var devices = mongoose.model('devices', DeviceSchema);


exports.findAll = function (cb) {
    devices.find({}, {_id:0}).sort( { sorting: 1 } ).lean().exec(cb);
};

exports.findByCode = function (code, cb) {
    devices.findOne({code: code}, {_id:0}).exec(cb);
};

exports.updateStatus = function(code, command, status, cb){
    // FIXME findAndModify fail
    var oldstatus=1
    if (status===1) oldstatus=0;
    
    devices.update({code: code, "controls.status": oldstatus, controls: { $elemMatch: {code: command} }}, {$set : {"controls.$.status": status}}).exec(this.findByCode(code, cb));
};

exports.save = function(device, cb){
    devices.upsert({code:device.code}, device).exec(this.findByCode(device.code, cb));
};