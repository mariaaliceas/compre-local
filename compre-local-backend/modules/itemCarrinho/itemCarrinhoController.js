const ItemCarrinhoDAO = require('../itemCarrinho/itemCarrinhoDAO.js');
module.exports = (app) => {
    const getItensByIdCarrinho = async (req, res) => {
        const idCarrinho = req.params.idCarrinho;

        if(!idCarrinho) {
            return res.status(400).json({ err: "Id do carrinho não informado"});
        }

        const ItemCompra = getItemCompraDAO();
        const itensCompra = await ItemCompra.getItensByIdCarrinho(idCarrinho);

        if (!itensCompra){
            return res.status(400).json({ err: "Não foram encontrados itens no seu carrinho!"});
        }
    
        return res.json(itensCompra);
    }

    const save = async (req, res) => {
        const itemCompra = { ...req.body };
        const idCarrinho = req.params.idCarrinho;

        if(!idCarrinho) {
            return res.json({error: "Id do carrinho não informado"});
        }

        itemCompra.idItemCompra = req.params.idItemCompra ?? false;

        if(!itemCompra.idProduto) {
            return res.json({error: "Id do produto não informado"});
        }

        const ItemCompra = getItemCompraDAO();
        if (req.params.idCarrinho) {
            const response = await ItemCompra.update(itemCompra);
            return res.status(response.code).json(response.message);
        } else {
            const response = await ItemCompra.insert(itemCompra);
            return res.status(response.code).json(response.message);
        }
    }

    const remove = async (req, res) => {
        const idItemCompra = req.params.idItemCompra;

        if(!idItemCompra) {
            res.json({ error: "Id do item não informado"});
        }

        const ItemCompra = getItemCompraDAO();
        itemExists = await ItemCompra.getItemByIdItem(idItemCompra);

        if (!itemExists){
            return res.status(400).json({ err: "Item não encontrado"});
        }

        const response = await ItemCompra.remove(idItemCompra);
        return res.status(response.code).json(response.message);
    }

    const getItemCompraDAO = () => {
        return new ItemCarrinhoDAO(app);
    }

    return { getItensByIdCarrinho, save, remove }
}