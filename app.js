
var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

// app is set to localhost:3000, change this if needed in config.js

//sets up socket.io and sets the port to listen to to 9010
var socket = require('socket.io-client')('http://localhost:9010');

// requires the Weather model module
var Weather = require('./app/models/weather');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});

var app = express();

require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

// Setup SOCKET.IO client
socket.on('connect', function() { console.log('connected'); });
socket.on('event', function(data) { console.log('event:', data); });
socket.on('disconnect', function() { console.log('disconnected'); });

socket.on('news', function(data) {
  console.log('received sim input from remote IoT server:', data);
  console.log('sending my other event');
  socket.emit('my other event', { hello: 'this messages was sent from the client' });
});



socket.on('weather', function(data) {
  console.log('received weather:', data);
  var weatherData = new Weather (
    {
    device: data.device,
    temperature: data.temperature,
    humidity: data.humidity,
    created: new Date()
  }
  );

  weatherData.save(function(err, data){
    if (err) return handleError(err);
    console.log('Weather saved!');
});


});

module.exports = app;
