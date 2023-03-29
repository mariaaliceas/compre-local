const FreteDAO = require('../dao/freteDAO.js');

class FretesContoller {
    constructor(connection) {
        this.connection = connection;
    }
    atualizaFrete(req, res) {
        const { id, tipo, distanciaMax, valor, distanciaLim } = req.body;
        console.log(req.body);
        const frete = this.getDAO().atualizaDadosFrete(id, tipo, distanciaMax, valor, distanciaLim);
        res.send(frete);
    }
    getDAO() {
        return new FreteDAO(this.connection);
    }

}

module.exports = FretesContoller;