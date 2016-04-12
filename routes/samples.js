/**
* /samples routes
*
*/
var express = require('express');
var router = express.Router();

// Include the data helper
var samplesdata = require('../data/samples');

router.get('/', function(req, res, next) {
  res.send('get samples view');
});

router.post('/', function(req,res,next){

  res.send('Post samples view');
  
});

module.exports = router;
