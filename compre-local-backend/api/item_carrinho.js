module.exports = (app) => {
    const getItensByIdCarrinho = async (req, res) => {
        const idCarrinho = req.params.idCarrinho;

        if(!idCarrinho) {
            return res.status(400).json({ err: "Id do carrinho não informado"});
        }

        itemsCarrinho = await app.database("itemCompra")
        .join("produto", "itemCompra.idProduto", "produto.IdProduto")
        .where({ idCarrinho: idCarrinho });

        if (!itemsCarrinho){
            return res.status(400).json({ err: "Não foram encontrados itens no seu carrinho!"});
        }
    
        return res.json(itemsCarrinho);
    }

    return { getItensByIdCarrinho }
}