var express = require('express');
var socket = require('socket.io');

var PORT = process.env.PORT || 80;

// new App setup
var app = express();
var server = app.listen(PORT, function(){
    console.log('listening for requests on port 4000');
});

// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);

io.on('connection',function(socket) {
    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });

    socket.on('typing',function(data) {
        socket.broadcast.emit('typing',data)
    });
});

// var http = require('http');

// var server = http.createServer(function(req,res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello Amit');
// });

// server.listen(3000,'127.0.0.1');
