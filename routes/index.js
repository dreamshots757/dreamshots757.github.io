var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dream Shots 757',
                        subtitle: 'Virginia Beach, Norfolk, Hampton Roads Photography'});
});

module.exports = router;
