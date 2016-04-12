var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/', function(req, res, next) {

  var status = { status: "alive" };
  res.json(status);

});

router.get('/', function(req, res, next) {

  var status = { status: "alive" };
  res.send("alive");

});

module.exports = router;
