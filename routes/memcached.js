var express = require('express');
var Memcached = require('memcached');

var router = express.Router();


var memcached = new Memcached(localhost:11211, {});

router.get('/', function(req, res, next) {
  res.send(data);
});

// router.get('/', function(req, res, next) {
//   memcached.get('foo', function (err, data) {
//     console.log(data);
//     res.send(data);
//   });
// });

router.post('/', function(req, res, next) {
  memcached.set('foo', , 'Hi from Memcached', function (err) {
    res.send("Data cached...");
  });
});

module.exports = router;
