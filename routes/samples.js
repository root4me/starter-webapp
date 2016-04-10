/**
* /samples routes
*
*/
var express = require('express');
var router = express.Router();

// Include the data helper
var samplesdata = require('../data/samples');

router.get('/', function(req, res, next) {
  console.log('get all');

  // call data helper method
  samplesdata.getAll(function(err,data){
    res.send('go all');
  });  
});

module.exports = router;
