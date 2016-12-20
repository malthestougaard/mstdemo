var express = require('express');
var Memcached = require('memcached');

var router = express.Router();
var memcached = new Memcached("mymem:11211");

router.get('/ping', function(req, res, next) {
  res.send("ping");
});

router.get('/', function(req, res, next) {
  memcached.get('foo', function (err, data) {
    if (err) {
      res.send("error");
    }
    else {
      res.send(data);
    }
  });
});

router.get('/insert', function(req, res, next) {
  memcached.set('foo', 'Hi from Memcached', function (err) {
    res.send("Data cached...");
  });
});

module.exports = router;
