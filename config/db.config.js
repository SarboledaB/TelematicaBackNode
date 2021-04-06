'use strict';

const mysql = require('mysql');


//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'telematica1.cvo2n6h6feje.us-east-1.rds.amazonaws.com',
  user     : 'root',
  password : 'telematica123',
  database : 'telematica1',
  port     : '3306',
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;