var express = require('express');
var router = express.Router();
const mysql=require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sensiblebox _ SmithGround' });
});

module.exports = router;
