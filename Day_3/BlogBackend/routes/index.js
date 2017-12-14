var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World');
});

router.get('/get',function(req, res, next) {
	res.json(req.query);
});

router.post('/post',function(req, res, next) {
	res.json(req.body);
});

module.exports = router;
