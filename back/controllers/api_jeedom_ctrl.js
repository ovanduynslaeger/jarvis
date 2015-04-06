var jeedomApikey = process.env.APIKEY;
var request = require('request');


exports.runDeviceCommand = function(req,res) {
    
    var id = req.params.id;

     var url = 'localhost/jeedom/core/api/jeeApi.php?request={"jsonrpc":"2.0","id":1,"method":"cmd::execCmd","params":{"apikey":"'+jeedomApikey+'","id": '+id+'}}';
    console.log("Url="+url);
    request({
      uri: url,
      method: "GET",
      timeout: 5000,
      followRedirect: true,
      maxRedirects: 10
    }, function(error, response, body) {
       console.log(response);
       res.send (error);
    });
    res.send('{ "data" : { "cmdId": "'+id+'"}');
 
};


exports.runDeviceCommandSlide = function(req,res) {
    
    var id = req.params.id;
    var slider = req.params.slider;

     var url = 'localhost/jeedom/core/api/jeeApi.php?request={"jsonrpc":"2.0","method":"cmd::execCmd","params":{"apikey":"'+jeedomApikey+'","id": '+id+', "options":{"slider": '+slider+'}}}';
    console.log("Url="+url);
    request({
      uri: url,
      method: "GET",
      timeout: 5000,
      followRedirect: true,
      maxRedirects: 10
    }, function(error, response, body) {
       console.log(response);
       res.send (error);
    });
    res.send('{ "data" : { "cmdId": "'+id+'", "slider": "'+slider+'"}');
 
};


exports.getDevices = function(cb) {
    
     var url = 'localhost/jeedom/core/api/jeeApi.php?request={"jsonrpc":"2.0","method":"object::fullEq","params":{"apikey":"'+jeedomApikey+'"}}';
    console.log("Url="+url);
    request({
      uri: url,
      method: "GET",
      timeout: 5000,
      followRedirect: true,
      maxRedirects: 10
    }, function(error, response, body) {
       console.log(response);
       cb(response);
    });

};