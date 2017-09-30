var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

module.exports = function(app, passport) {

  app.use('/', router);

  router.get('/login', function(req, res) {
    res.render('user/login', {
      message: req.flash('loginMessage')
    });
  });

  router.get('/signup', function(req, res) {
    res.render('user/signup', {
      message: req.flash('signupMessage')
    });
  });

  router.get('/profile', function(req, res) {
    res.render('user/profile', {
      user: req.user // get the user out of session and pass to template
    });
  });

  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

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
