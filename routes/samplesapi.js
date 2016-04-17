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

  var dat = {
    country : req.body.country,
    capital : req.body.capital
  };

  samplesdata.insert(dat, function(err,data){
    res.send(dat);
  });

});

router.delete('/', function(req, res, next) {

  var id = req.body.id;

    // call data helper method
  samplesdata.delete(id,function(err,data){
    res.send(data);
  });
});


module.exports = router;
