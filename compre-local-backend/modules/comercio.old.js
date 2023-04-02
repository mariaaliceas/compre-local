module.exports = (app) => {
    const get = async (req, res) => {
        const comercios = await app.database("comercio").select("*");

        return res.json(comercios);
    }

    const getComercioByTipo = async (req, res) => {
        const tpComercio = req.params.tpComercio;

        if (!tpComercio) {
            return res.status(400).json({ err: "Tipo de comércio não informado" });
        }

        comercios = await app.database("comercio").where({ tpComercio: tpComercio });

        if (!comercios) {
            return res.status(200).json({ success: "Não foram encontrados comercios para o tipo informado" });
        }

        return res.json(comercios);
    }

    const filter = async (req,res) => {
        const filter = { ...req.body };

        comercios = await app.database("comercio")
        .whereLike('nomeComercio', '%'+filter.comercio+'%')

        return res.json(comercios);
    }

    const getComercioById = async (req, res) => {
        const idComercio = req.params.idComercio;

        if(!idComercio) {
            return res.status(400).json({ err: "Id do comércio não informado"});
        }

        comercio = await app.database("comercio").where({ idComercio: idComercio }).first();

        if (!comercio){
            return res.status(400).json({ err: "Comércio não encontrado"});
        }
    
        return res.json(comercio);
    }

    const save = async (req, res) => {
        const comercio = { ...req.body };

        comercio.idComercio = req.params.idComercio ?? false;

        if(!comercio.cnpj) {
            return res.json({error: "CNPJ do comércio não informado"});
        }

        if (req.params.idComercio) {
            await app.database("comercio")
                .update(comercio)
                .where({ idComercio: comercio.idComercio })
                .then(() => res.status(200).json({success: "Comércio atualizado com sucesso!"}))
                .catch((err) => res.status(500).send(err));
        } else {
            await app.database("comercio")
                .insert(comercio)
                .then(() => res.status(200).json({success: "Comércio cadastrado com sucesso!"}))
                .catch((err) => res.status(500).send(err));
        }
    }

    const remove = async (req, res) => {

        const idComerio = req.params.idComerio;

        if(!idComerio) {
            return res.status(400).json({ err: "Id do comércio não informado"});
        }

        comercioExists = await app.database("comercio").where({ idComerio: idComerio }).first();

        if (!comercioExists){
            return res.status(400).json({ err: "Comércio não encontrado"});
        }

        await app.database("comercio").where({ idComerio: idComerio }).del();

        res.status(204).json({success: "Comércio excluído com sucesso"});
    }

    return { get, getComercioByTipo, filter, getComercioById, save, remove }
}