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

        if (req.params.idCarrinho) {
            await app.database("itemCompra")
                .update(itemCompra)
                .where({ idItemCompra: itemCompra.idItemCompra })
                .then(() => res.status(200).json({success: "Item atualizado com sucesso!"}))
                .catch((err) => res.status(500).send(err));
        } else {
            await app.database("itemCompra")
                .insert(itemCompra)
                .then(() => res.status(200).json({success: "Item cadastrado com sucesso!"}))
                .catch((err) => res.status(500).send(err));
        }
    }

    const remove = async (req, res) => {
        const idItemCompra = req.params.idItemCompra;

        if(!idItemCompra) {
            res.json({ error: "Id do item não informado"});
        }

        itemExists = await app.database("itemCompra").where({ idItemCompra: idItemCompra }).first();

        if (!itemExists){
            return res.status(400).json({ err: "Item não encontrado"});
        }

        await app.database("itemCompra").where({ idItemCompra: idItemCompra }).del();

        res.status(204).json({success: "Item excluído com sucesso"});
    }

    return { getItensByIdCarrinho, save, remove }
}