var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Quote = mongoose.model('Quote'),
  _ = require('underscore');

module.exports = function (app) {
  app.use('/quotes', router);
};


// Get responses
var displayList = function(req, res, next) {
  if(_.isEmpty(req.query) || _.has(req.query, "list")) {
    console.log("Using displayList");

    Quote.find(function (err, quotes) {
      if (err) return next(err);
      res.render('quotes/index', {
        title: 'Generator-Express MVC',
        quotes: quotes
      });
    });
  } else {
    console.log("! Using displayList");
    next();
  }
};

var randomQuote = function(req,res,next) {
  if(_.has(req.query, "random") && req.query.random == "true") {
    console.log("Using randomQuote");
    Quote.findRandom().limit(1).exec(function (err, quotes) {
      if (err) return next(err);
      res.render('quotes/index', {
        title: 'Generator-Express MVC',
        quotes: quotes
      });
    });
  } else {
    console.log("! Using randomQuote");
    next();
  }
};

router.get('/', [displayList, randomQuote]);


var addQuote = function (req, res, next) {
  var quote = new Quote(req.body);
  quote.save(function(err) {
    if (err) {
      return err;
    } else {
      console.log("Quote saved");
    }
  });
  next();
};

var checkProperPostRequest = function(req,res,next) {
  if(_.isEmpty(req.body)) {
    res.send("Error: Empty post body")
    // TODO: More conditions
    done();
  }
  else {
    next();
  }
};


router.post("/", [checkProperPostRequest, addQuote], function(req,res,next) {
  res.send("Quote Inserted!");
});
