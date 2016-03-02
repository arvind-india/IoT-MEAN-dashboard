var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Weather = mongoose.model('Weather');



module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'IoT Weather Data Database with WebSockets to serve IoT data'
  });
});

router.get('/weather', function (req, res, next) {
  Weather.find(function (err, weather) {
    if (err) return next(err);
    // console.log('sending weather:', weather);
  res.json(weather);

  });
});
