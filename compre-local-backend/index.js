const express = require('express');
const {singleton} = require("./db");
const app = express();

app.get('/', function (req, res) {
 // singleton.consulta();
  console.log(singleton.consulta());
  res.send('Hello World')
})


app.listen(3000)