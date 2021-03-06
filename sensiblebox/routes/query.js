var express = require('express');
var moment = require('moment'); // HN dateformater
const mysql = require('mysql');
const dbConfig={
    host     : 'localhost',
    port     :  3306,
    user     : 'root',
    password : '12345678',
    database : 'sensible',
    dateStrings : true // HN dataString
}; //후에 DB설정에 맞게 변경

exports.getAllStartupproject=function getAllStartupproject(){
  return new Promise((resolve, reject)=>{
    console.log("function in");
    var connection = mysql.createConnection(dbConfig);
    connection.connect();
    var sql = `select id, duedate, title, space, fund, investment, price, etc, link, week from SUPPORTPROGRAM`;
    connection.query(sql,(err,results)=>{
      if(err)
        reject(err);
      for (var i = 0; i < results.length; i++) {
        results[i].duedate = moment(results[i].duedate).format('YY-MM-DD'); // moment : dateformater
      }
      resolve(results);
    });
    connection.end();
  })
};
/*
exports.getAllStartupproject = async function getFundStartupproject(){
  try{
    var connection = mysql.createConnection(dbConfig);
    connection.connect();
    var sql = `select * from SUPPORTPROGRAM where fund = 1`;
    var results = connection.query(sql, (err,results))
  }
}
*/
//module.exports = router;
