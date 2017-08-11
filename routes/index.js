var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FindYourNextCatsitter.com' });
});

router.post('/complete', function(request, response, next) {
  console.log(request.body);
  response.render('complete', request.body);
});

module.exports = router;
