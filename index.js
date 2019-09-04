line
lne
inndds
sadasd
asda
sd
asdas
d
as
da
sd
a
d
a
d

sa

var PORT = process.env.PORT || 80;

// App setup
var app = express();
var server = app.listen(PORT, function(){
    

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

// var http = require('http'); // new  edit

// var server = http.createServer(function(req,res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello Amit');
// });
// comment
// server.listen(3000,'127.0.0.1');
