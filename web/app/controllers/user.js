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
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  router.post('/login', passport.authenticate('local-login', {
    successReturnToOrRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }));

};

var isLoggedIn = function(req, res, next) {

  if (req.isAuthenticated()) {
    return next();
  } else {
    req.session.returnTo = req.url;
    res.redirect('/login');
  }
}

module.exports.isLoggedIn = isLoggedIn;
