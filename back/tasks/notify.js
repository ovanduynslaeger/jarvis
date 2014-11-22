var newtifryURI = "https://newtifry.appspot.com/newtifry";
var request = require('request');

exports.notify = function(sourcekey,title) {
  var url = newtifryURI + "?source="+sourcekey+"&title="+title;

    request({
      uri: url,
      method: "GET",
      timeout: 5000,
      followRedirect: true,
      maxRedirects: 10
    }, function(error, response, body) {
      
    });
    
    
}



