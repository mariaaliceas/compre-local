module.exports = (app) => {
    const get = async (req, res) => {
        const pedidos = await app.database("pedido")
        .select('*')

        return res.json(pedidos);
    }

    const getPedidoById = async (req, res) => {
        const idPedido = req.params.idPedido;

        if(!idPedido) {
            return res.status(400).json({ err: "Id do pedido não informado"});
        }

        pedido = await app.database("pedido").where({ idPedido: idPedido }).first();

        if (!pedido){
            return res.status(400).json({ err: "Pedido não encontrado"});
        }
    
        return res.json(pedido);
    }

    const save = async (req, res) => {
        const pedido = { ...req.body };

        pedido.idPedido = req.params.idPedido ?? false;

        if(!pedido.codigo) {
            return res.status(404).json({error: "Código do pedido não informado"});
        }

        var codigo = await app.database("pedido")
        .select('codigo')
        .whereLike('codigo', '%'+pedido.codigo+'%');

        if (codigo.length > 0) {
            return res.status(404).send({err: "Código de pedido já existe"});
        }

        if (req.params.idPedido) {
            await app.database("pedido")
            .update(pedido)
            .then(() => res.status(200).json({success: "Pedido atualizado com sucesso!"}))
            .catch((err) => res.status(500).send(err));
        } else {
            await app.database("pedido")
            .insert(pedido)
            .then(() => res.status(200).json({success: "Pedido cadastrado com sucesso!"}))
            .catch((err) => res.status(500).send(err));
        }
    }

    const remove = async (req, res) => {
        const idPedido = req.params.idPedido;

        if(!idPedido) {
            return res.status(400).json({ err: "Id do pedido não informado"});
        }

        pedidoExists = await app.database("pedido").where({ idPedido: idPedido }).first();

        if (!pedidoExists){
            return res.status(400).json({ err: "Pedido não encontrada"});
        }

        await app.database("pedido").where({ idPedido: idPedido }).del();

        res.status(204).json({success: "Pedido excluído com sucesso"});
    }

    const alterCarrinho = async (req, res) => {
        const data = { ...req.body };

        carrinhoExists = await app.database("carrinho").where({ idCarrinho: data.idCarrinho }).first();

        if (!carrinhoExists) {
            return res.status(404).json("Carrinho não encontrado");
        }

        try {
            await app.database("itemCompra")
            .where({ idCarrinho: data.idCarrinho })
            .del();   
        } catch (error) {
            return res.status(404).json("Ocorreu um erro ao registrar o pedido.");
        }

        try {
            await app.database("carrinho")
            .where({ idCarrinho: data.idCarrinho })
            .del();   
        } catch (error) {
            return res.status(404).json("Ocorreu um erro ao registrar o pedido.");
        }

        return res.status(200).json("Pedido finalizado com sucesso.")
    }

    return { get, getPedidoById, save, alterCarrinho, remove }
}