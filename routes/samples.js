/**
* /samples routes
*
*/
var express = require('express');
var router = express.Router();

// Include the data helper
var samplesdata = require('../data/samples');

router.get('/', function(req, res, next) {
  res.render('samples/index', { users:
    [ { name: 'Jon uno' , dob: '1/1/1970' }, {name: 'Jon due', dob: '2/1/1970'}]
  });
});

router.post('/', function(req,res,next){

  res.render('Post samples view');

});

module.exports = router;
