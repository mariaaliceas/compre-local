const express = require('express');
const db = require("./db");
const app = express();

const mysql = require('mysql2');
// const connection = mysql.createConnection("mysql://root@localhost:3306/compre-local");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'compre-local'
});

// simple query
connection.query(
  'SELECT * FROM table WHERE name = "Page" AND age > 45',
  function(err, results, fields) {
    //console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
  }
);

// connection.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
//console.log(connection)

app.get('/', function (req, res) {
  //db.connect();
  res.send('Hello World')
})


app.listen(3000)