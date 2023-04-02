class PedidoDAO {
    constructor(app){
        this.app = app;
    }

    async get()
    {
        var pedidos = await this.app.database("pedido")
        .select("*");
        return pedidos;
    }

    async getPedidoById(idPedido) {
        var pedido = await this.app.database("pedido")
        .where({ idPedido: idPedido })
        .first();
    
        return pedido;
    }

    async getPedidoByCodido(codigo) {
        var codigoPedido = await this.app.database("pedido")
        .select('codigo')
        .whereLike('codigo', '%'+codigo+'%');

        return codigoPedido;
    }

    async persistePedido(pedido){
        try {
            await this.app.database("pedido")
            .insert(pedido);

            return {
                status: true,
                message: "Pedido inserido com sucesso",
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

    async updatePedido(pedido){
        try {
            await this.app.database("pedido")
            .update(pedido);

            return {
                status: true,
                message: "Pedido atualizado com sucesso",
                code: 200
            }
        } catch (error) {
            return {
                status: false,
                message: 'Ocorreu um erro ao atualizar o pedido',
                code: 404
            }
        }
    }

    // async save() {
    //     const pedido = { ...req.body };

    //     pedido.idPedido = req.params.idPedido ?? false;

    //     if(!pedido.codigo || pedido.codigo === "") {

    //         if(!pedido.total || pedido.total < 0) {
    //             return res.status(404).json({error: "Valores inválidossss"});
    //         }

    //         return res.status(404).json({error: "Código do pedido não informado"});
    //     }

    //     var codigo = await app.database("pedido")
    //     .select('codigo')
    //     .whereLike('codigo', '%'+pedido.codigo+'%');

    //     if (codigo.length > 0) {

    //         if(!pedido.total || pedido.total < 0) {
    //             return res.status(404).json({error: "Valores inválidos"});
    //         }

    //         return res.status(404).send({err: "Código de pedido já existe"});
    //     }

    //     if (pedido.codigo.length > 255) {
    //         return res.status(404).send({err: "Código de pedido deve conter até 255 caracteres."});
    //     }

    //     if(pedido.total === null || pedido.total < 0) {
    //         return res.status(404).json({error: "O valor do pedido não foi informado"});
    //     }

    //     if (req.params.idPedido) {
    //         await app.database("pedido")
    //         .update(pedido)
    //         .then(() => res.status(200).json({success: "Pedido atualizado com sucesso!"}))
    //         .catch((err) => res.status(500).json({error: "Ocorreu um erro ao atualizar produto."}))
    //     } else {
    //         await app.database("pedido")
    //         .insert(pedido)
    //         .then(() => res.status(200).json({success: "Pedido cadastrado com sucesso!"}))
    //         .catch((err) => res.status(500).json({error: "Ocorreu um erro ao cadastrar produto."}))
    //     }
    // }

    async remove(idPedido) {
        try {
            await this.app.database("pedido")
            .where({ idPedido: idPedido })
            .del();

            return {
                status: true,
                message: "Carrinho excluído com sucesso",
                code: 204
            }
        } catch (error) {
            return {
                status: false,
                message: "Ocorreu um erro ao excluir carrinho",
                code: 404
            }
        }
    }

    async alterCarrinho(idCarrinho) {
        const data = { ...req.body };

        carrinhoExists = await app.database("carrinho").where({ idCarrinho: idCarrinho }).first();

        if (!carrinhoExists) {
            return res.status(404).json("Carrinho não encontrado");
        }

        try {
            await app.database("itemCompra")
            .where({ idCarrinho: idCarrinho })
            .del();   
        } catch (error) {
            return res.status(404).json("Ocorreu um erro ao registrar o pedido.");
        }

        try {
            await app.database("carrinho")
            .where({ idCarrinho: idCarrinho })
            .del();   
        } catch (error) {
            return res.status(404).json("Ocorreu um erro ao registrar o pedido.");
        }

        return res.status(200).json("Pedido finalizado com sucesso.")
    }
}

module.exports = PedidoDAO;