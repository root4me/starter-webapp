var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

var user = require('./user');

module.exports = function(app, passport) {

  app.use('/', router);

  router.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Generator-Express MVC'
    });
  });
};

router.get('/hello', user.isLoggedIn, function(req, res) {
  res.send('look at me!');
});
