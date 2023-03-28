const ComercioDAO = require('../dao/comercioDAO.js');

class ComercioController {
    constructor(connection) {
        this.connection = connection;
    }
    buscaComercio(req, res) {
        const idComercio = req.params.id;
        const comercio = new ComercioDAO(this.connection).retornaDadosComercio(idComercio);
        res.send(comercio);
    }

}

module.exports=ComercioController;