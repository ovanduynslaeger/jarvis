var apiJeedom = require('../controllers/api_jeedom_ctrl');

exports.findAll = function (cb) {

    apiJeedom.getDevices(function (response) {
        var json = JSON.parse(response);
        
cb(null,json.result);
        
    });

};
