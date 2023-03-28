const FreteDAO = require('../dao/freteDAO.js');

class FretesContoller {
    constructor(connection) {
        this.connection = connection;
    }
    atualizaFrete(req, res) {
        const {id, tipo, distanciaMax,valor, distanciaLim} = req.body;
        const frete = new FreteDAO(this.connection).atualizaDadosFrete(id, tipo, distanciaMax, valor, distanciaLim);
        res.send(frete);
    }

}

module.exports=FretesContoller;