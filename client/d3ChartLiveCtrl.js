
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

    // $scope.options1 = angular.copy($scope.options);
    // $scope.options1.chart.duration = 0;
    // $scope.options1.chart.yDomain = [-20,120];

    $scope.data = [{ values: [], key: 'Current Temperature' }];

    $scope.run = true;

    var x = 0;
    socket.on('liveWeather', function(data) {
        console.log('receivedlive Weather:', data);
        var y = data.temperature;

        if (!$scope.run) return;
        $scope.data[0].values.push({ x: x,  y: y});
        if ($scope.data[0].values.length > 20) $scope.data[0].values.shift();
        x++;
        console.log('LiveChart temperature data: ' + y);
          $scope.$apply(); // update both chart
        }
    );
}
