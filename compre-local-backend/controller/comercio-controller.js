const ComercioDAO = require('../dao/comercioDAO.js');

class ComercioController {
    constructor(connection) {
        this.connection = connection;
    }
    buscaComercio(req, res) {
        const idComercio = req.params.id;
        const comercio = this.getDAO().retornaDadosComercio(idComercio);
        res.send(comercio);
    }
    getDAO() {
        return new ComercioDAO(this.connection);
    }
}

module.exports=ComercioController;