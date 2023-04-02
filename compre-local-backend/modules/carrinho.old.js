module.exports = (app) => {
    const getCarrinhoByIdUsuario = async (req, res) => {
        const idUsuario = req.params.idUsuario;

        if (!idUsuario) {
            return res.status(400).json({ err: "Id do usuário não informado"});
        }

        const comercios = await app.database("carrinho")
            .join("comercio", "carrinho.idComercio", "comercio.idComercio")
            .where("idUsuario", idUsuario)
            .select("*");

        return res.json(comercios);
    }

    const getCarrinhoById = async (req, res) => {
        const idCarrinho = req.params.idUsuario;

        if (!idCarrinho) {
            return res.status(400).json({ err: "Id do carrinho não informado"});
        }

        carrinho = await app.database("carrinho").where({ idCarrinho: idCarrinho }).first();

        if (!carrinho){
            return res.status(400).json({ err: "Carrinho não encontrado"});
        }
    
        return res.json(carrinho);
    }

    const save = async (req, res) => {
        const carrinho = { ...req.body };

        carrinho.idCarrinho = req.params.idCarrinho ?? false;

        if(!carrinho.idUsuario) {
            return res.json({error: "Usuário não informado"});
        }

        if (req.params.idCarrinho) {
            await app.database("carrinho")
                .update(carrinho)
                .where({ idCarrinho: carrinho.idCarrinho })
                .then(() => res.status(200).json({success: "Carrinho atualizado com sucesso!"}))
                .catch((err) => res.status(500).send(err));
        } else {
            await app.database("carrinho")
                .insert(carrinho)
                .then(() => res.status(200).json({success: "Carrinho cadastrado com sucesso!"}))
                .catch((err) => res.status(500).send(err));
        }
    }

    const remove = async (req, res) => {

        const idCarrinho = req.params.idCarrinho;

        if(!idCarrinho) {
            return res.status(400).json({ err: "Id do carrinho não informado"});
        }

        carrinhoExists = await app.database("carrinho").where({ idCarrinho: idCarrinho }).first();

        if (!carrinhoExists){
            return res.status(400).json({ err: "Carrinho não encontrado"});
        }

        await app.database("carrinho").where({ idCarrinho: idCarrinho }).del();

        res.status(204).json({success: "Carrinho excluído com sucesso"});
    }

    return { getCarrinhoByIdUsuario, getCarrinhoById, save, remove }
}