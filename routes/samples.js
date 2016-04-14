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
//res.send('got all');
//res.send(data);
var d = '{ countries: ' + data + "}";
console.log(d);

    res.render('samples/index', data );
  });

});

router.post('/', function(req,res,next){

  // gather values from data element and send it to samplesdata insert method
  var dat = {
    country : req.body.txtCountry,
    capital : req.body.txtCapital
  };

  console.log(dat);
  samplesdata.insert(dat, function(err,data){
    res.send(dat);
  });

});


module.exports = router;
