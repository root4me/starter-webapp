/**
* /samples routes
*
*/
var express = require('express');
var router = express.Router();

// Include the data helper
var samplesdata = require('../data/samples');

router.get('/', function(req, res, next) {

    // call data helper method
  samplesdata.getAll(function(err,data){
    res.send(data);
  });
});

router.post('/', function(req,res,next){

  samplesdata.insert(function(err,data){
    res.send(data);
  });


});

module.exports = router;
