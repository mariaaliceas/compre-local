class FreteDAO{
    constructor(connection) {
        this.connection = connection;
    }

    atualizaDadosFrete(id,tipo, distanciaMax, valor, distanciaLim){
        console.log(id,tipo, distanciaMax, valor, distanciaLim);
        this.connection.consulta(`UPDATE FRETE SET TIPO = '${tipo}', DISTANCIA_MAXIMA = '${distanciaMax}' WHERE ID = ${id}`);
        this.connection.consulta(`UPDATE VALOR_FRETE SET VALOR = '${valor}',  DISTANCIA_LIMITE = '${distanciaLim}' WHERE ID_FRETE = ${id}`);
    }

    buscaFrete(idComercio) {
        let buscaIdFrete = this.connection.consulta('SELECT * FROM FRETE WHERE ID_COMERCIO = ' + idComercio);
        let buscaFreteValores = this.connection.consulta('SELECT * FROM VALOR_FRETE WHERE ID_FRETE = ' + buscaIdFrete[0].ID);
        return {
            id:buscaIdFrete[0].ID,
            distanciaMax: buscaIdFrete[0].DISTANCIA_MAXIMA,
            tipo: buscaIdFrete[0].TIPO,
            valores: buscaFreteValores.map(b => {
                return {
                    valor: b.VALOR,
                    distanciaLim: b.DISTANCIA_LIMITE
                }
            })
        }

    }
}
module.exports=FreteDAO;