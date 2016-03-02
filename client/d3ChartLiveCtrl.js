
angular.module('IoTexpressHUD')
//Service to interact with the socket library
// .factory('socket', function (socketFactory) {
//   var serverBaseUrl = 'http://localhost:3000';
//   var myIoSocket = io.connect(serverBaseUrl);

//   var socket = socketFactory({
//       ioSocket: myIoSocket
//   });

//   return socket;
// });

.factory('socket', function(socketFactory){
    //Creating connection with server
    var socket = io.connect('http://localhost:3000');

  return socket;
});


angular.module('IoTexpressHUD')
.controller('d3ChartLiveCtrl', d3ChartLiveCtrl);

function d3ChartLiveCtrl($scope){
 $scope.options = {
        chart: {
            type: 'lineChart',
            height: 180,
            margin : {
                top: 20,
                right: 20,
                bottom: 40,
                left: 55
            },
            x: function(d){ return d.x; },
            y: function(d){ return d.y; },
            useInteractiveGuideline: true,
            duration: 1000,
            yAxis: {
                tickFormat: function(d){
                   return d3.format('.01f')(d);
                }
            }
        }
    };

    $scope.options1 = angular.copy($scope.options);
    $scope.options1.chart.duration = 0;
    $scope.options1.chart.yDomain = [-20,120];

    $scope.data = [{ values: [], key: 'Current Temperature' }];

    $scope.run = true;

    // var x = 0;
    // setInterval(function(){
    //   if (!$scope.run) return;
    //   $scope.data[0].values.push({ x: x,  y: Math.random() - 0.5});
    //   if ($scope.data[0].values.length > 20) $scope.data[0].values.shift();
    //   x++;

    //   $scope.$apply(); // update both chart
    // }, 1000);

// socket.on('weather', function(data) {
//     console.log('received weather:', data);
//     var y = data.temperature;
//     var x = 0;
//     if (!$scope.run) return;
//       $scope.data[0].values.push({ x: x,  y: y});
//       if ($scope.data[0].values.length > 20) $scope.data[0].values.shift();
//       x++;

//       $scope.$apply(); // update both chart
//     }
// );

}
