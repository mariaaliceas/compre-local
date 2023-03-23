module.exports = (app) => {
    const get = async (req, res) => {
        const pedidos = await app.database("pedido")
        .select('*')

        return res.json(pedidos);
    }

    const save = async (req, res) => {
        const pedido = { ...req.body };

        if(!pedido.codigo) {
            return res.status(404).json({error: "Código do pedido não informado"});
        }

        var codigo = await app.database("pedido")
        .select('codigo')
        .whereLike('codigo', '%'+pedido.codigo+'%');

        if (codigo.length > 0) {
            return res.status(404).send({err: "Código de pedido já existe"});
        }

        await app.database("pedido")
            .insert(pedido)
            .then(() => res.status(200).json({success: "Pedido cadastrado com sucesso!"}))
            .catch((err) => res.status(500).send(err));
    }

    const alterCarrinho = async (req, res) => {
        const data = { ...req.body };

        await app.database("itemCompra")
        .where({ idCarrinho: data.idCarrinho })
        .del();

        await app.database("carrinho")
        .where({ idCarrinho: data.idCarrinho })
        .del();
    }

    return { get, save, alterCarrinho }
}