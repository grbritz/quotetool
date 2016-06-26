var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'quotetool'
    },
    port: 3000,
    db: 'mongodb://localhost/quotetool-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'quotetool'
    },
    port: 3000,
    db: process.env.MONGODB_URI,
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASS
  },

  production: {
    root: rootPath,
    app: {
      name: 'quotetool'
    },
    port: 3000,
    db: 'mongodb://localhost/quotetool-production'
  }
};

module.exports = config[env];
