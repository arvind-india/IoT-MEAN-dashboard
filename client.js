//unused - this code has been migrated to app.js.

var socket = require('socket.io-client')('http://localhost:9010');

socket.on('connect', function() { console.log('connected'); });
socket.on('event', function(data) { console.log('event:', data); });
socket.on('disconnect', function() { console.log('disconnected'); });

socket.on('news', function(data) {
  console.log('received news:', data);
  console.log('sending my other event');
  socket.emit('my other event', { hello: 'this messages was sent from client' });
});

socket.on('weather', function(data) {
  console.log('received weather:', data);
});
