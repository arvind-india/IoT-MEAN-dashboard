angular.module('IoTexpressHUD', ['nvd3']);
//'nvd3' is the library to add D3 charts with angular

// angular.module('IoTexpressHUD')
// .config(function() {
//   // add config such as routing here.
// });

var socket = io('http://localhost:3000');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
