var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var status = { status: "alive" };

  res.json(status);

});


module.exports = router;
