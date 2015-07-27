var jeedomApikey = process.env.APIKEY;
var request = require('request');


exports.runDeviceCommand = function(req,res) {
    
    var id = req.params.id;
    
    var url="";
    if (isNaN(id)) {
      url = 'http://localhost/jeedom/core/api/jeeApi.php?request={"jsonrpc":"2.0","id":1,"method":"cmd::execCmd","params":{"apikey":"'+jeedomApikey+'","id": '+eval('process.env.'+id)+'}}';
    } else {
      url = 'http://localhost/jeedom/core/api/jeeApi.php?request={"jsonrpc":"2.0","id":1,"method":"cmd::execCmd","params":{"apikey":"'+jeedomApikey+'","id": '+id+'}}';
    }
    request({
      uri: url,
      method: "GET",
      timeout: 5000,
      followRedirect: true,
      maxRedirects: 10
    }, function(error, response, body) {
        if (error) {
           console.log(response);
           res.send (error);
        } else {
           res.send('{ "data" : { "cmdId": "'+id+'"}');
        }
    });
 
};


exports.runDeviceCommandSlide = function(req,res) {
    
    var id = req.params.id;
    var slider = req.params.slider;

    var url = 'http://localhost/jeedom/core/api/jeeApi.php?request={"jsonrpc":"2.0","method":"cmd::execCmd","params":{"apikey":"'+jeedomApikey+'","id": '+id+', "options":{"slider": '+slider+'}}}';
    request({
      uri: url,
      method: "GET",
      timeout: 5000,
      followRedirect: true,
      maxRedirects: 10
    }, function(error, response, body) {
        if (error) {
           console.log(response);
           res.send (error);
        } else {
           res.send('{ "data" : { "cmdId": "'+id+'", "slider": "'+slider+'"}');
        }
    });
 
};


exports.runDeviceCommandColor = function(req,res) {
    
    var id = req.params.id;
    var color = req.params.color;

    var url = 'http://localhost/jeedom/core/api/jeeApi.php?request={"jsonrpc":"2.0","method":"cmd::execCmd","params":{"apikey":"'+jeedomApikey+'","id": '+id+', "options":{"color": '+color+'}}}';
    request({
      uri: url,
      method: "GET",
      timeout: 5000,
      followRedirect: true,
      maxRedirects: 10
    }, function(error, response, body) {
        if (error) {
           console.log(response);
           res.send (error);
        } else {
           res.send('{ "data" : { "cmdId": "'+id+'", "color": "'+color+'"}');
        }
    });
 
};


exports.getDevices = function(cb) {
    
    var url = 'http://localhost/jeedom/core/api/myJeeApi.php?request={"jsonrpc":"2.0","method":"object::fullEq","params":{"apikey":"'+jeedomApikey+'"}}';
    request({
      uri: url,
      method: "GET",
      timeout: 5000,
      followRedirect: true,
      maxRedirects: 10
    }, function(error, response, body) {
       cb(body);
    });

};