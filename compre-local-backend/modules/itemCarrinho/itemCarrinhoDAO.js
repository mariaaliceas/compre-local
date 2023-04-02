class ItemCarrinhoDAO {
    constructor(app) {
        this.app = app;
    }

    async getItemByIdItem(idItemCompra){
        const itemCompra = await this.app.database("itemCompra")
        .where({ idItemCompra: idItemCompra })
        .first();

        return itemCompra
    }

    async getItensByIdCarrinho (idCarrinho) {
        var itemsCarrinho = await this.app.database("itemCompra")
        .join("produto", "itemCompra.idProduto", "produto.IdProduto")
        .where({ idCarrinho: idCarrinho });
    
        return itemsCarrinho;
    }

    async insert(itemCompra){
        try {
            await this.app.database("itemCompra")
            .insert(itemCompra);

            return {
                status: true,
                message: "Item inserido com sucesso",
                code: 200
            }
        } catch (error) {
            return {
                status: false,
                message: error,
                code: 404
            }
        }
    }

    async update(itemCompra){
        try {
            await this.app.database("itemCompra")
            .update(itemCompra)
            .where({idItemCompra: itemCompra.idItemCompra});

            return {
                status: true,
                message: "Item atualizado com sucesso",
                code: 200
            }
        } catch (error) {
            return {
                status: false,
                message: "Ocorreu um erro ao atualizar item",
                code: 404
            }
        }
    }

    // async save() {
    //     const itemCompra = { ...req.body };
    //     const idCarrinho = req.params.idCarrinho;

    //     if(!idCarrinho) {
    //         return res.json({error: "Id do carrinho não informado"});
    //     }

    //     itemCompra.idItemCompra = req.params.idItemCompra ?? false;

    //     if(!itemCompra.idProduto) {
    //         return res.json({error: "Id do produto não informado"});
    //     }

    //     if (req.params.idCarrinho) {
    //         await app.database("itemCompra")
    //             .update(itemCompra)
    //             .where({ idItemCompra: itemCompra.idItemCompra })
    //             .then(() => res.status(200).json({success: "Item atualizado com sucesso!"}))
    //             .catch((err) => res.status(500).send(err));
    //     } else {
    //         await app.database("itemCompra")
    //             .insert(itemCompra)
    //             .then(() => res.status(200).json({success: "Item cadastrado com sucesso!"}))
    //             .catch((err) => res.status(500).send(err));
    //     }
    // }

    async remove(idItemCompra) {
        try {
            await this.app.database("itemCompra")
            .where({ idItemCompra: idItemCompra })
            .del();

            return {
                status: true,
                message: "Item excluído com sucesso",
                code: 204
            }
        } catch (error) {
            return {
                status: false,
                message: "Item um erro ao excluir carrinho",
                code: 404
            }
        }
    }

    async removeByIdCarrinho(idCarrinho) {
        try {
            await this.app.database("itemCompra")
            .where({ idCarrinho: idCarrinho })
            .del();

            return {
                status: true,
                message: "Item excluído com sucesso",
                code: 204
            }
        } catch (error) {
            return {
                status: false,
                message: "Item um erro ao excluir carrinho",
                code: 404
            }
        }
    }
}

module.exports = ItemCarrinhoDAO;