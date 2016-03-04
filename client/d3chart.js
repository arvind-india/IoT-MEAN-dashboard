angular.module('IoTexpressHUD')
.controller('d3Ctrl', d3Ctrl);

function d3Ctrl($scope) {
  $scope.options = {
            chart: {
                type: 'lineChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function(d){ return d.x; },
                y: function(d){ return d.y; },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function(e){ console.log("stateChange"); },
                    changeState: function(e){ console.log("changeState"); },
                    tooltipShow: function(e){ console.log("tooltipShow"); },
                    tooltipHide: function(e){ console.log("tooltipHide"); }
                },
                xAxis: {
                    axisLabel: 'Time (5s)'
                },
                yAxis: {
                    axisLabel: 'Temperature (F)',
                    tickFormat: function(d){
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                },
                callback: function(chart){
                    console.log("!!! lineChart callback !!!");
                }
            },
            title: {
                enable: true,
                text: 'Temperature'
            },
            subtitle: {
                enable: true,
                text: 'Simulated Temperature Readings from Heroku Server at 5 second intervals, last 1000 data points.',
                css: {
                    'text-align': 'center',
                    'margin': '10px 13px 0px 7px'
                }
            },
            caption: {
                enable: true,
                html: '<b>Temperature.</b> Displays temperature readings at 5 second intervals.',
                css: {
                    'text-align': 'justify',
                    'margin': '10px 13px 0px 7px'
                }
            }
        };

    var temp = [];
    var readings = [];

    getWeatherDataD3();

      function getWeatherDataD3(){
        d3.json('https://iot-express-dashboard.herokuapp.com/weather', function(data){
            var data1000 = data.slice(data.length - 1000, data.length);
            console.log(data.length + "data.length");
            data1000.forEach(function(measurement, index){
                // console.log("line 72 " + measurement.created);
                temp.push({x: index, y: parseInt(measurement.temperature)});
             });
             // console.log("ln 71 temp: " + temp[0] + temp[0].x + " , " + temp[0].y);
             // console.log(typeof temp[0] + ": Type of temp[0]");
             // console.log(typeof temp[0].x + ": Type of temp[0].x");
             // console.log(temp[0]);

        $scope.data = [
            {
                values: temp,      //values - represents the array of {x,y} data points
                key: 'Temperature F', //key  - the name of the series.
                color: '#7777ff',  //color - optional: choose your own line color.
                strokeWidth: 2,
                classed: 'dashed',
                interpolate: 'basis'
            }
        ];
      });
    }
}
