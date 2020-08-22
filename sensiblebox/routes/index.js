var express = require('express');
var router = express.Router();
const mysql=require('mysql');
//브런치 추가용
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sensiblebox _ SmithGround' });
});

module.exports = router;
