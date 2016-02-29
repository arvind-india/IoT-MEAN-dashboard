var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'iotexpress'
    },
    // sets the port for localhost
    port: 3000,
    db: 'mongodb://localhost/iotexpress1-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'iotexpress'
    },
    port: 3000,
    db: 'mongodb://localhost/iotexpress-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'iotexpress'
    },
    port: 3000,
    db: 'mongodb://localhost/iotexpress-production'
  }
};

module.exports = config[env];
