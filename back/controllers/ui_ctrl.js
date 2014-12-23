var Devices = require('../models/devices');
var Categories = require('../models/category');
var Scenarios = require('../models/scenarios');
var async = require('async');

var exec = require('child_process').exec;

exports.index = function (req, res) {
    
    var cb = function (req,res) {
        console.log("Render");
        res.render('index.jade', {
            locals : {
                title : 'Joshua'
                ,description: 'Home'
                ,author: 'Olivier Vanduynslaeger'
                ,analyticssiteid: 'XXXXXXX'
                ,categories: JSON.stringify(req.session.categories)
                ,devices: JSON.stringify(req.session.devices)
                ,scenarios: JSON.stringify(req.session.scenarios)
            }
        });
    };

    getDatas(req,res,cb);
    //getCategories(req,res,cb);

};


exports.test = function (req, res) {
    
    var cb = function (req,res) {
        console.log("Render");
        res.render('parameters.jade', {
            locals : {
                title : 'Joshua'
                ,description: 'Home'
                ,author: 'Olivier Vanduynslaeger'
                ,analyticssiteid: 'XXXXXXX'
                ,categories: JSON.stringify(req.session.categories)
                ,devices: JSON.stringify(req.session.devices)
                ,scenarios: JSON.stringify(req.session.scenarios)
            }
        });
    };

    getDatas(req,res,cb);
    //getCategories(req,res,cb);

};



function getCategories(req,res,cb) {

    if (req.session.categories) { 
        console.log("get from session");
        cb();
    } else {
        console.log("getCategories");
        Categories.findAll(function (err, categories) {
            if (err) {
                console.log("ERROR");
            }
            console.log("found");
           req.session.categories=categories;
            console.log("session set");
            cb();
        });
    }
}


function getDevices(req,res,cb) {

   if (req.session.devices) { 
       console.log("get from session");
       cb();
   } else {
        Devices.findAll(function (err, devices) {
            if (err) {
                console.log("ERROR");
            }
           req.session.devices=devices;
           cb();
        });
   }
}

function getScenarios(req,res,cb) {

    if (req.session.scenarios) { 
        console.log("get from session");
       cb();
    } else {
        Scenarios.getScenarios(function (err, scenarios) {
            if (err) {
                console.log("ERROR");
            }
           req.session.scenarios=scenarios;
           cb();
        });
    }

}


function getDatas(req,res,cb) {
    async.parallel ( [
        function(callback) {
            getCategories(req,res,callback);
        },
        function(callback) {
            getDevices(req,res,callback);
        },
        function(callback) {
            getScenarios(req,res,callback);
        }
        ],
        function(err) {
            if (err) {
                console.log("ERROR "+ err);
            }
            cb(req,res,cb);
        });    
    
}