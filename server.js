//setup Dependencies
var Devices = require('./back/models/devices');

var connect = require('connect')
    , express = require('express')
    , io = require('socket.io')
    , port = process.env.PORT
    , ip = process.env.IP ;

//Setup Express
var server = express.createServer();
server.configure(function(){
    server.set('views', __dirname + '/front/views');
    server.set('view options', { layout: false });
    server.use(connect.bodyParser());
    server.use(express.cookieParser());
    server.use(express.session({ secret: "shhhhhhhhh!"}));
    server.use(express.favicon(__dirname + "/front/static/images/favicon.ico"));     
    //server.use(connect.static(__dirname + '/front/static'));
    server.use(connect.static(__dirname + '/'));
    server.use(server.router);
});

require('./config/routes')(server);
server.get('/*', function (req, res) {
    throw new NotFound();
});

//setup the errors
server.error(function(err, req, res, next){
    console.log("Erreur"+err+ " on request"+req);

    if (err instanceof NotFound) {
        res.render('errors/404.jade', { locals: {
                  title : '404 - Not Found'
                 ,description: ''
                 ,author: ''
                 ,analyticssiteid: 'XXXXXXX'
                },status: 404 });
    } else {
        res.render('errors/500.jade', { locals: {
                  title : 'The Server Encountered an Error'
                 ,description: ''
                 ,author: ''
                 ,analyticssiteid: 'XXXXXXX'
                 ,error: err
                },status: 500 });
    }

});




//Setup Socket.IO
/*
io = io.listen(server);
io.sockets.on('connection', function(socket){
	console.log('Client Connected');
	Devices.findAll(function (err, devices) {

        if (err) {
            //res.send("ERROR")
        }
        console.log('Devices '+devices);

    });

	socket.on('message', function(data){
		socket.broadcast.emit('server_message',data);
		socket.emit('server_message',data);
	});

socket.on('disconnect', function(){
  console.log('Client Disconnected.');
});

});

*/

function NotFound(msg) {
    this.name = 'NotFound';
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
}

server.listen(port, ip);



console.log('Listening on http://0.0.0.0:' + port );