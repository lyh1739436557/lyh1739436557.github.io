var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);

http.listen(8181, ()=>{
    console.log('succeed');
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'websocket' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
