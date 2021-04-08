//create server
let port = process.env.PORT || 8080;
let express = require('express');
let app = express();
let server = require('http').createServer(app).listen(port, function(){
  console.log('Server is listening at port: ', port);
});

//where we look for files
app.use(express.static('public'));

//create socket connection
let io = require('socket.io').listen(server)

//clients
var inputs = io.of('/')
//listen for anyone connecting to default namespace
inputs.on('connection', function(socket){
  console.log('new input client!: ' + socket.id);
  
  //new event listeners
  
  //listen for this client to disconnect
  socket.on('disconnect', function(){
    console.log('input client disconnected: ' + socket.id);
  });
  
});

//output
var output = io.of('/output');
//listen
output.on('connection', function(socket){
  console.log('new output client!: ' + socket.id);
  
  //new event listeners
  
  //listen for this client to disconnect
  socket.on('disconnect', function(){
    console.log('output client disconnected: ' + socket.id);
  });
  
});