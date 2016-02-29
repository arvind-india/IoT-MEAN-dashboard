//used as a web server to generate simulated IoT devise output
//
var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

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

// Setup SOCKET.IO Server
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);  //pass a http.Server instance
server.listen(9010);  //listen on port 9010

io.on('connection', function(socket) {
  console.log('sending news');
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log('received my other event with data:', data);
  });
  setInterval(() => {
    console.log('sending the weather...');
    socket.emit('weather',
        { 'device': 'NodeSim1',
          'temperature': Math.floor(Math.random()*(80-65+1)+65),
          'humidity' : Math.floor(Math.random()*(99-20+1)+20),
        });
  }, 2000);
});


module.exports = app;
