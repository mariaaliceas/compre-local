const express = require('express');
const ComercioDAO = require('./comercioDAO');
const { singleton } = require("./db");
const app = express();

app.get('/', function (req, res) {
  const comercioDAO = new ComercioDAO(singleton)
  const comercio = comercioDAO.buscaComercio(1); //1 === id
  const frete = comercioDAO.buscaFrete(1);
  const produto = comercioDAO.buscarProduto(1);
  comercio.frete = frete;
  comercio.produto = produto;
  console.log(produto);
  res.send(comercio);
})


app.listen(3000)