var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Weather = mongoose.model('Weather');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Weather.find(function (err, weather) {
    if (err) return next(err);
    res.render('index', {
      title: 'Simulated IoT Weather Data Server',
      weather: weather
    });
  });
});
