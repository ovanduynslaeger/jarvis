//setup Dependencies
var mongoose = require('mongoose');


var ScenarioSchema = new mongoose.Schema({
    name: String,
    code: String,
    category: String,
    actions: [ {
       code: String,
       name: String,
       icon: String,
        commands: [ {
            deviceCode : String,
    //        deviceName : String,
    //        deviceType : String,
    //        controlName: String,
            controlCode: String,
    //        controlUrl: String,
            sorting: Number,
        control: {
                name: String,
                url: String,
                display: String,
                isStatefull: Boolean,
                state: Number
             },
        device: {
            code: String,
            name: String,
            type: String,
            protocol: String,
            status: Number,
            publicId: String,
            photo: String,
            category: String,
            controls: [ {
                code: String,
                name: String,
                url: String,
                display: String,
                isStatefull: Boolean,
                state: Number
             } ]        
        }
    }]
} ]
});

var scenarios = mongoose.model('scenarios', ScenarioSchema);

exports.findAll = function (cb) {
    scenarios.find({}, {_id:0}).lean().exec(cb);
};

exports.findByCode = function (code, cb) {
    scenarios.findOne({code: code}, {_id:0}).exec(cb);
};

exports.save = function(device, cb){
    scenarios.upsert({code:device.code}, device).exec(this.findByCode(device.code, cb));
};

exports.getScenarios = function (cb) {
    mongoose.connection.db.eval("getScenarios()", cb);
}

exports.getScenario = function (code,cb) {
    mongoose.connection.db.eval("getScenario('"+code+"')", cb);
}