var Devices = require('../models/devices');
var Categories = require('../models/category');
var Scenarios = require('../models/scenarios');
var remoteDio = process.env.REMOTEDIO;
var homeCodeRF433 = process.env.HOMECODERF433;
var sleep  = require('sleep');
var async = require('async');
var request = require('request');


var exec = require('child_process').exec;

exports.listDevices = function (req, res) {
    console.log("Controller - findAll");
    Devices.findAll(function (err, devices) {

        if (err) {
            res.send("ERROR")
        }
        res.send(devices);

    });
};

exports.listScenarios = function (req, res) {
    Scenarios.findAll(function (err, scenarios) {

        if (err) {
            res.send("ERROR")
        }
        res.send(scenarios);

    });
};


exports.deviceFindByCode = function (req, res) {

    var code = req.params.code;

    console.log("Controller - findByCode : "+code);

    Devices.findByCode(code, function (err, device) {

        if (err) {
            res.send("ERROR")
        }
        res.send(device);
    });
};


exports.deviceCommand = function(req, res){
    var code = req.params.code;
    var command = req.params.command;
    var iterate = req.params.iterate;

    runDeviceCommand(res,code,command,"",iterate,function() {
        res.send("OK");
    });

};

exports.deviceCommandOne = function(req, res){
    var code = req.params.code;
    var command = req.params.command;
    var iterate = 1;

    runDeviceCommand(res,code,command,"",iterate,function() {
        res.send("OK");
    });

};

exports.scenarioCommand = function(req, res){
    var code = req.params.code;
    var command = req.params.command;

    var cb = function (res) {
        res.send("OK");
    };

 
    console.log("getScenario code="+code+ ",command="+command);
    Scenarios.getScenario(code, function (err, scenario) {
        
        for (var a = 0; a < scenario.actions.length; a++) {
            if (scenario.actions[a].code===command) {
                async.eachSeries(scenario.actions[a].comands, function(item,callback) {
                        wait(runDeviceCommand(res,item.device.code, item.control.code, item.control.url,1,function() { 
                            callback();
                        }));
                });
            }
        }
    });
    
    cb(res);

};

function translateCommand(word,type,iterate){
    var it = Math.abs(parseInt(iterate));
    if (type=="AMPLIFIER") {
        switch (word) {
            case "on":
                return "SYSTEM_POWER";
            case "off":
                return "STANDBY";
            case "mute":
                return "MUTE";
            case "vol":
                var v="";
                var i;
                for (i=0; i < it; i++) {
                    if (iterate.charAt(0) == "-")
                      v = v + "VOL- ";
                    else
                      v = v + "VOL+ ";
                }
                return v;
            case "modetv":
                return "DTV/CBL";
            case "modemovie":
                return "DVD";
            default :
                return "-1";
        }
    }
    if ((type=="SOCKET") || (type=="SHUTTER")) {
        switch (word) {
            case "on":
            case "up":
                return "1";
            case "off":
            case "down":
                return "0";
            default :
                return "-1";
        }
    }
}

function translateStatus(word){
    switch (word) {
        case "on":
            return 1;
        case "off":
            return 0;
        default :
            return -1;
    }
}

function wait(cb) {
    console.log("waiting");
    sleep.usleep(500000);
    if (cb) cb();
}

function runDeviceCommand(res,code,command,url,iterate,callback) {

    var cb = function (err, device) {

        if (err) {
            console.error(err);
        }

        var commandLine="";
        var commandCode = translateCommand(command,device.type,iterate);
        if (device.protocol=="dio") {
          commandLine = 'sudo '+'send-'+device.protocol+' 0 '+remoteDio+' '+device.publicId+' '+commandCode;
        }
        if (device.protocol=="rf433") {
          commandLine = 'sudo '+'send-'+device.protocol+' 0 '+homeCodeRF433+' '+device.publicId+' '+commandCode;
        }
        if (device.protocol=="ir") {
          //Yamaha_RAV302
          commandLine = 'irsend SEND_ONCE '+device.publicId+' '+commandCode;
        }

        if (commandLine!=="") {
            console.log(commandLine);
            exec(commandLine, function (error, stdout, stderr) {
              if(err) console.error(err);
                  if (callback) callback();
              });
        }
        
        if (url!=="") {
            console.log("Url="+url);
            request({
              uri: url,
              method: "GET",
              timeout: 5000,
              followRedirect: true,
              maxRedirects: 10
            }, function(error, response, body) {
              //console.log(response);
              if (callback) callback();
            });
        }
    }

    Devices.findByCode(code,cb);

};