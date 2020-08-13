var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '12345678',
  database: 'sensible'
};

var connection = mysql.createConnection(dbConfig);
const getAllStartupproject = require('./query').getAllStartupproject;

router.get('/', async(req, res)=> {
  console.log("hello");
  try{
    var data = await getAllStartupproject();
    console.log(data)

  }
  catch(err){
    console.log(err)
  }
  finally{
    res.render('allData', { title: 'Sensiblebox _ SmithGround'});
    console.log("allData success")
  }

});
  //connection.end();



/*

router.get('/', function(req, res, next) {
  console.log("hello");
  var data = getAllStartupproject(connection);
  console.log("data:", data);
  res.render('allData', { title: 'Sensiblebox _ SmithGround', data: data });
  console.log("allData success")
});
*/
/*
router.get('/ex', function (req, res, next) {
  function get_db(){
    return new Promise((resolve, reject)=>{
      connection.connect();
      var sql = 'select * from SUPPORTPROGRAM'
      connection.query(sql,(err, results)=>{
        if(err)
          reject(err);
        resolve(results);
      });
      connection.end();
    })
  }
  get_db().then(function())

});
*/
module.exports = router;
