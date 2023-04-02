const ComercioDAO = require('../comercio/comercioDAO.js');

module.exports = (app) => {
    const get = async (req, res) => {
        var Comerio = getComercioDAO();
        const comercios = await Comerio.get()

        return res.json(comercios);
    }

    const getComercioByTipo = async (req, res) => {
        const tpComercio = req.params.tpComercio;

        if (!tpComercio) {
            return res.status(400).json({ err: "Tipo de comércio não informado" });
        }

        var Comerio = getComercioDAO();
        var comercios = await Comerio.getByTpComercio(tpComercio);

        if (!comercios) {
            return res.status(200).json({ success: "Não foram encontrados comercios para o tipo informado" });
        }

        return res.json(comercios);
    }

    const filter = async (req,res) => {
        const filter = { ...req.body };
        var Comercio = getComercioDAO();
        var comercios = await Comercio.filter(filter);

        return res.json(comercios);
    }

    const getComercioById = async (req, res) => {
        const idComercio = req.params.idComercio;

        if(!idComercio) {
            return res.status(400).json({ err: "Id do comércio não informado"});
        }

        var Comerio = getComercioDAO();
        const comercio = await Comerio.getComercioById(idComercio);

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

        var Comercio = getComercioDAO();
        if (req.params.idComercio) {
            const response = await Comercio.update(comercio);
            return res.status(response.code).json(response.message);
        } else {
            const response = await Comercio.insert(comercio);
            return res.status(response.code).json(response.message);
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

    const getComercioDAO = () => {
        return new ComercioDAO(app);
    }

    return { get, getComercioByTipo, filter, getComercioById, save, remove }
}