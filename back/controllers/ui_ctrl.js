var Devices = require('../models/devices');
var Categories = require('../models/category');
var async = require('async');

exports.index = function (req, res) {
    init(req,res);
};


exports.macro = function (req, res) {
    var cb = function () {
        res.render('macro.jade', {
            locals : {
                title : 'Jarvis'
                ,description: 'Home'
                ,author: 'Olivier Vanduynslaeger'
                ,analyticssiteid: 'XXXXXXX'
                ,categories: JSON.stringify(req.session.categories)
                ,devices: JSON.stringify(req.session.devices)
            }
        });
    };

    getDatas(req,res,cb);   
    
};

/*
exports.clearcache = function (req, res) {
    req.session.destroy;
    init(req,res);
};
*/

/*
exports.param = function (req, res) {
    res.render('parameters.jade', {
        locals : {
            title : 'Jarvis'
            ,description: 'Home'
            ,author: 'Olivier Vanduynslaeger'
            ,analyticssiteid: 'XXXXXXX'
        }
    });
};
*/

/*
exports.test = function (req, res) {
    var cb = function (req,res) {
        res.render('test.jade', {
            locals : {
                title : 'Jarvis'
                ,description: 'Home'
                ,author: 'Olivier Vanduynslaeger'
                ,analyticssiteid: 'XXXXXXX'
                ,categories: JSON.stringify(req.session.categories)
                ,devices: JSON.stringify(req.session.devices)
            }
        });
    };

    getDatas(req,res,cb);    
};
*/

function init(req,res) {
    var cb = function () {
        res.render('index.jade', {
                title : 'Jarvis'
                ,description: 'Home'
                ,author: 'Olivier Vanduynslaeger'
                ,analyticssiteid: 'XXXXXXX'
                ,categories: JSON.stringify(req.session.categories)
                ,devices: JSON.stringify(req.session.devices)
        });
    };

    getDatas(req,res,cb);    
}

function getCategories(req,res,cb) {

/*
if (req.session.categories) { 
        cb();
    } else {
        console.log("getCategories");
        Categories.findAll(function (err, categories) {
            if (err) {
                console.log("ERROR in getCategories");
            }
           req.session.categories=categories;
           cb();
        });
    }
*/
    console.log("getCategories");
    Categories.findAll(function (err, categories) {
        if (err) {
            console.log("ERROR in getCategories");
        }
       req.session.categories=categories;
       cb();
    });
    
}


function getDevices(req,res,cb) {

/*   if (req.session.devices) { 
       cb();
   } else {
        console.log("getDevices");
        Devices.findAll(function (err, devices) {
            if (err) {
                console.log("ERROR in getDevices");
            }
           req.session.devices=devices;
           cb();
        });
   }
   */
    console.log("getDevices");
    Devices.findAll(function (err, devices) {
        if (err) {
            console.log("ERROR in getDevices");
        }
       req.session.devices=devices;
       cb();
    });
}


function getDatas(req,res,cb) {
    async.parallel ( [
        function(callback) {
            getCategories(req,res,callback);
        },
        function(callback) {
            getDevices(req,res,callback);
        }
        ],
        function(err) {
            if (err) {
                console.log("ERROR "+ err);
            }
            cb();
        });    
    
}