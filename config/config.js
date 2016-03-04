var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var MONGOLAB_URI = process.env.MONGOLAB_URI;

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'iotexpress'
    },
    // sets the port for localhost
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/iotexpress1-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'iotexpress'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/iotexpress-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'iotexpress'
    },
    port: process.env.PORT || 3000,
    db: MONGOLAB_URI
  }
};


module.exports = config[env];
