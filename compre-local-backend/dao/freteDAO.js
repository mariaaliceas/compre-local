class FreteDAO{
    constructor(connection) {
        this.connection = connection;
    }

    atualizaDadosFrete(id,tipo, distanciaMax, valor, distanciaLim){
        this.connection.consulta(`UPDATE FRETE SET TIPO = ${tipo}, DISTANCIA_MAXIMA = ${distanciaMax} WHERE ID = ${id}`);
        this.connection.consulta(`UPDATE VALOR_FRETE SET VALOR = ${valor},  DISTANCIA_LIMITE = ${distanciaLim} WHERE ID_FRETE = ${id}`);
    }
}
module.exports=FreteDAO;