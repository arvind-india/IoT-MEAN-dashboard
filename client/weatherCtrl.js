angular.module('IoTexpressHUD')
.controller('weatherCtrl', weatherCtrl);

weatherCtrl.$inject = ['$http'];

function weatherCtrl($http){
  var vm = this;
  vm.getAllWeather = getAllWeather;
  vm.all = [];

  function getAllWeather() {
    $http
      .get('http://localhost:3000/weather')
      .then(function(response){
        vm.all = response.data;
        // console.log("vm.all: " + vm.all);
    });
  }
  getAllWeather();
}


// angular.module('IoTexpressHUD')
// .controller('weatherCtrl', ['weatherService', function (weatherService){
//   var vm = this;

//   // INSTEAD CALL A SERVICE (weatherService) THAT GETS JSON
//   // DATA FROM SERVER VIA $HTTP

//   // retrieve list of weather data
//   weatherService.getAllWeather()
//   .then(function(response) {
//     vm.weatherData = response.data;
//   });
// }]);


