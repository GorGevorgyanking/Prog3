var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cords = [];
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
    for (var i in cords) {
        io.sockets.emit("cords", cords[i]);
    }
    socket.on('cord', function (k) {
        cords.push(k);
        io.sockets.emit("cords", k);
    });
});


