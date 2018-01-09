var express = require('express');
var router = express.Router();
const config = require('../config.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { apikey: config.googlemapskey });
});

module.exports = router;
