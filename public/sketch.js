 //open and connect the input socket
 let socket = io('/');

 //listen for the confirmation of connection 
 socket.on('connect', function(){
   console.log('now connected to server');
 });
 
 function setup(){
   createCanvas(windowWidth, windowHeight);
   background(0);
 }
 
 function draw(){
 
 }