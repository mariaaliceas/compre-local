const express = require('express');
const cors = require('cors');
const ComercioDAO = require('./comercioDAO');
const { singleton } = require("./db");
const app = express();
app.use(cors());

app.get('/:id', function (req, res) {
  const idComercio = req.params.id;
  const comercio = new ComercioDAO(singleton).retornaDadosComercio(idComercio);
  res.send(comercio);
  
})


app.listen(3000)