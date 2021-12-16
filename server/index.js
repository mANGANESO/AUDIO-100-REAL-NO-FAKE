var express = require('express');
var app = express();
var server = require('http').Server(app);
const io = require('socket.io')(server);

app.use("/",express.static('public'));

io.on('connection', (socket) => {

 	console.log("iniciando");

	socket.on('voice', (blob) => {
        console.log("Audio recibido");
		socket.broadcast.emit('voice', blob);
	});

});


server.listen(5001,() => {
	console.log("Servidor corriendo en http://localhost:5001");

});

 io.on('connection', (socket) => {

 	console.log("iniciando");

	socket.on('radio', (blob) => {
        console.log("Audio recibido");
		socket.broadcast.emit('voice', blob);
	});

});

module.exports = server;