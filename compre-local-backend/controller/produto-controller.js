const ProdutoDAO = require('../dao/produtoDAO.js');

class ProdutoContoller {
    constructor(connection) {
        this.connection = connection;
    }
    atualizaProduto(req, res) {
        const { id, tipo, nome, estoque, preco, tipoEstoque, tipoPreco } = req.body;
        console.log(req.body);
        const produto = new ProdutoDAO(this.connection).atualizaDadosProduto(id, tipo, nome, estoque, preco, tipoEstoque, tipoPreco);
        res.send(produto);
    }
    excluiProduto(req, res) {
        const { id } = req.params;
        console.log(req.params);
        const produto = new ProdutoDAO(this.connection).excluiProduto(id);
        res.send(produto);
    }
    criaProduto(req, res) {
        const { tipo, idComercio, nome, estoque, preco, tipoEstoque, tipoPreco } = req.body;
        console.log(req.body);
        const produto = new ProdutoDAO(this.connection).criaProduto(tipo, idComercio, nome, estoque, preco, tipoEstoque, tipoPreco);
        res.send(produto);
    }

    retornaProduto(req, res) {
        const { id } = req.params;
        const produto = new ProdutoDAO(this.connection).retornaProduto(id);
        res.send(produto);
    }

    buscarProduto(req, res) {
        const { id } = req.params;
        const produto = new ProdutoDAO(this.connection).buscarProduto(id);
        res.send(produto);
    }
}

module.exports = ProdutoContoller;