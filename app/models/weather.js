// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var WeatherSchema = new Schema(
  {
  device: String,
  temperature: String,
  humidity: String,
  created: Date
  }
);

WeatherSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });


module.exports = mongoose.model('Weather', WeatherSchema);

