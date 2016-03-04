angular.module('IoTexpressHUD')
.controller('weatherCtrl', weatherCtrl);

// ensures that functions are properly compiled
weatherCtrl.$inject = ['$http'];

function weatherCtrl($http){
  var vm = this;
  vm.getAllWeather = getAllWeather;
  vm.all = [];

  function getAllWeather() {
    $http
      .get('https://iot-express-dashboard.herokuapp.com/weather')
      .then(function(response){
        vm.all = response.data;
        // console.log("vm.all: " + vm.all);
        return vm.all;
    });
  }

  getAllWeather();

//this code has been moved to  d3chart.js
  // vm.weatherDataD3 = [];
  // vm.getWeatherDataD3 = getWeatherDataD3;

  // function getWeatherDataD3(){
  //   d3.json('http://localhost:3000/weather', function(data){
  //   vm.weatherDataD3 = data;
  //   });
  // }
  // getWeatherDataD3();
}
