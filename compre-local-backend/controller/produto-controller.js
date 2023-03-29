const ProdutoDAO = require('../dao/produtoDAO.js');

class ProdutoContoller {
    constructor(connection) {
        this.connection = connection;
    }
    atualizaProduto(req, res) {
        const { id, tipo, nome, estoque, preco, tipoEstoque, tipoPreco } = req.body;
        console.log(req.body);
        const produto = this.getDAO().atualizaDadosProduto(id, tipo, nome, estoque, preco, tipoEstoque, tipoPreco);
        res.send(produto);
    }
    excluiProduto(req, res) {
        const { id } = req.params;
        console.log(req.params);
        const produto = this.getDAO().excluiProduto(id);
        res.send(produto);
    }
    criaProduto(req, res) {
        const { tipo, idComercio, nome, estoque, preco, tipoEstoque, tipoPreco } = req.body;
        console.log(req.body);
        const produto = this.getDAO().criaProduto(tipo, idComercio, nome, estoque, preco, tipoEstoque, tipoPreco);
        res.send(produto);
    }

    retornaProduto(req, res) {
        const { id } = req.params;
        const produto = this.getDAO().retornaProduto(id);
        res.send(produto);
    }

    buscarProduto(req, res) {
        const { id } = req.params;
        const produto = this.getDAO().buscarProduto(id);
        res.send(produto);
    }

    getDAO() {
        return new ProdutoDAO(this.connection);
    }
}

module.exports = ProdutoContoller;