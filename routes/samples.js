/**
* /samples routes
*
*/
var express = require('express');
var router = express.Router();

// Include the data helper
var samplesdata = require('../data/samples');

router.get('/', function(req, res, next) {

  samplesdata.getAll(function(err,data){
    // Going to get an array of rows from getAll. wrap it around a selector before supplying it to the view
    res.render('samples/index', {
      countries : data
    } );
  });
});

router.post('/', function(req,res,next){

  // gather values from data element and send it to  insert method
  var dat = {
    country : req.body.txtCountry,
    capital : req.body.txtCapital
  };

  samplesdata.insert(dat, function(err,data){
    res.send(dat);
  });

});


module.exports = router;
