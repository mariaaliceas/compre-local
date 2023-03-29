const express = require('express');
const cors = require('cors');
const ComercioDAO = require('./dao/comercioDAO');
const { singleton } = require("./database/db");
const app = express();
const FretesController = require ('./controller/frete-controller');
const ComercioController = require('./controller/comercio-controller');
const ProdutoController = require('./controller/produto-controller');
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());

app.get('/comercios/:id', function (req, res) {
  new ComercioController(singleton).buscaComercio(req, res)
})

app.put('/fretes', function (req, res){
  new FretesController(singleton).atualizaFrete(req,res)
})

app.put('/produtos', function (req, res){
  new ProdutoController(singleton).atualizaProduto(req,res)
})

app.post('/produtos', function (req, res){
  new ProdutoController(singleton).criaProduto(req,res)
})

app.delete('/produtos/:id', function (req, res){
  new ProdutoController(singleton).excluiProduto(req,res)
})

app.get('/produtos/:id', function (req, res){
  new ProdutoController(singleton).retornaProduto(req,res)
})

app.get('/produtos/comercio/:id', function (req, res){
  new ProdutoController(singleton).buscarProduto(req,res)
})

app.listen(3000)