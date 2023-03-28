const express = require('express');
const cors = require('cors');
const ComercioDAO = require('./dao/comercioDAO');
const { singleton } = require("./database/db");
const app = express();
const FretesContoller = require ('./controller/frete-controller');
const ComercioController = require('./controller/comercio-controller');

app.use(cors());

app.get('/comercios/:id', function (req, res) {
  new ComercioController(singleton).buscaComercio(req, res)
})

app.put('/fretes', function (req, res){
  new FretesController(singleton).atualizaFrete(req,res)
})

app.listen(3000)