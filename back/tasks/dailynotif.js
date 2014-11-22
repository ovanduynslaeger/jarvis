var notify = require("./notify.js");
var request = require('request');
var async = require('async');


// ==========================================
//  DATE DU JOUR
// ==========================================
function getDate() {
  var j = new Array( "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" );
  var m = new Array( "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre" )

  var now = new Date();
  var jour    = now.getDate();
  if (jour==1) { jour = "premier" };
  var heure   = now.getHours();
  var minute  = now.getMinutes();
  if (minute===0) {
    minute = "";
  }
  if (minute===1) {
    minute = "une";
  }
  
  return "Nous sommes le "+j[now.getDay()]+" "+jour+" "+m[now.getMonth()]+". Il est "+heure+" heure "+minute+". ";
}

function scrapMeteo(body) {
    var meteo  = JSON.parse(body).result;
    
    var str = 'Les prévisions météo sont ';
    str += meteo.resumes["0_resume"].description;
    str += ' et les températures comprises entre ';
    str += meteo.resumes["0_resume"].temperatureMin;
    str += ' et ';
    str += meteo.resumes["0_resume"].temperatureMax;
    str += ' degrés.';
    return str;
}

function getMeteo(cb){
  var url = 'http://www.meteo-france.mobi/ws/getDetail/france/628400.json';

    request({
      uri: url,
      method: "GET",
      timeout: 5000,
      followRedirect: true,
      maxRedirects: 10
    }, function(error, response, body) {
      console.log(url +": "+response.statusCode);
        if (error || response.statusCode != 200) {
          console.log("L'action a échoué");
          return;
        }
        cb(scrapMeteo(body));
    });
}


exports.getNews = function () {
    async.waterfall ( [
        function(callback) {
            callback(null, getDate() );
        },
        function(date,callback) {
          getMeteo( function(value) {
            callback(null,date + value);
          })
          
        }
        ]
        ,
        function(err,result) {
            if (err) {
                console.log("ERROR "+ err);
            } 
            console.log("Result="+result);
            notify.notify("746ff6e34cf87d79368880635d5e2259",result);
        });    
    
}