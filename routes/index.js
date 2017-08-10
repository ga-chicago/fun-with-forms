var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fun with Forms!' });
});

router.post('/complete', function(req, res, next) {
  console.log(req.body);
  res.render('complete', req.body);
});

module.exports = router;
