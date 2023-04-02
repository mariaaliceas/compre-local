const ProdutosDAO = require('../produtos/produtosDAO.js');

module.exports = (app) => {
    const get = async (req, res) => {
        var Produtos = getProdutosDAO();
        const produtos = await Produtos.get();

        return res.json(produtos);
    }

    const getProdutosDAO = () => {
        return new ProdutosDAO(app);
    }

    return { get }
}