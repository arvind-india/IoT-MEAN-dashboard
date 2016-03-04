
var express = require('express'),
  config = require('./config/config'),
  // glob = module to allow matching of files using the patterns the shell uses, like stars and stuff.
  glob = require('glob'),
  //mongoose = api for express to mongoDB.
  mongoose = require('mongoose');

var app = require('express')();

// creates a server instance for this express app
// app is set to localhost:3000, change this if needed in config.js
var http = require('http').Server(app);

var port = process.env.PORT || 3000;
http.listen(port, function(){
  console.log('listening on port ' + port);
});

// allows access to socket.io functionality and library.
var io = require('socket.io')(http);
//sets up socket.io and sets the port to listen to to 9010
//which corresponds to the port the weatherdata server uses to
//broadcast data via web sockets

var simConnectString = process.env.SIMULATOR || 'https://iot-express-dashboard.herokuapp.com/weather';
console.log('Connecting to IoT Simulator using:', simConnectString);
var socket = require('socket.io-client')("https://iot-sim.herokuapp.com/");

// var socket = require('socket.io-client')('https://iot-sim.herokuapp.com');

// requires the Weather model module
var Weather = require('./app/models/weather');

// mongoose will refer to the config.db file for config settings
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

//sets up a glob for all models in the models folder
var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});

//----------------------------------------------------------------------------
//SERVER SIDE ROUTER FILE is app/controllers/home.js
//----------------------------------------------------------------------------

io.on('connection', function(socket){
  console.log('a browser client connected');
});


require('./config/express')(app, config);

// Setup SOCKET.IO CLIENT OF THE WEATHER DATA SERVER
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

  io.emit('liveWeather', data);
});

module.exports = app;
