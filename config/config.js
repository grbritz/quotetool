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
    port: 5000,
    db: 'mongodb://heroku_8ffksphm:3ubb4jhehfhcd387il7kmjiqu9@ds023714.mlab.com:23714/heroku_8ffksphm',
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
