var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello! Is it me you are looking for...');
});

module.exports = router;
