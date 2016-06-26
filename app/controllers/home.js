var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Quote = mongoose.model('Quote');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Quote.find(function (err, quotes) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      quotes: quotes
    });
  });
});
