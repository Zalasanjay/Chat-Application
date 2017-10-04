var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 2200;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  console.log('New User Connected');
  
  socket.on('disconnect', function(){
    console.log('User Disconnected');
  });
  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

