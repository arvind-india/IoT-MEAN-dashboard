  //weatherService GETS JSO DATA FROM SERVER VIA $HTTP

angular.module('IoTexpressHUD')
.service('weatherService', weatherService);

weatherService.$inject = ['$http'];

function weatherService($http) {

  var vm = this;
  vm.all = [];
  vm.getAllWeather = getAllWeather;


  getAllWeather();

  function getAllWeather(){
    $http
      .get('http://localhost:3000/')
      .then(function(response){
        vm.all = response.data.weather;
    });
  }
}

  // GET - non-functional
  // function getAllWeather(request, response){
  //   Weather.find(function(error, weather) {
  //     if(error) response.json({message: 'Could not find any weather data'});
  //     response.json({weather: weather});
  //   });
  // }


