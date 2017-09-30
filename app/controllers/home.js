var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

module.exports = function(app, passport) {

  app.use('/', router);

  router.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Generator-Express MVC'
    });
  });
};

router.get('/hello', isLoggedIn, function(req, res) {
  res.send('look at me!');
});

function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
