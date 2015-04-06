exports.findAll = function (cb) {
    var cat =  [{ "code" : "SOCKET", "level" : "1", "name" : "Lumières", "photo" : "/images/SOCKET.svg", "maincolor" : "Salmon", "secondcolor" : "FireBrick" , "jeedomcategory" : "light"},
{"code" : "SHUTTER", "level" : "2", "name" : "Volets", "photo" : "/images/SHUTTER.svg", "maincolor" : "LightGreen", "secondcolor" : "MediumSeaGreen" , "jeedomcategory" : "automatism" },
{"code" : "AUDIO", "level" : "3", "name" : "Audio", "photo" : "/images/AUDIO.svg", "maincolor" : "Plum", "secondcolor" : "Purple", "jeedomcategory" : "heating" },
{"code" : "VIDEO", "level" : "4", "name" : "Vidéo", "photo" : "/images/VIDEO.svg", "maincolor" : "SandyBrown", "secondcolor" : "DarkOrange", "jeedomcategory" : "default" } ];
    cb(null,cat);
};