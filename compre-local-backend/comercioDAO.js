class ComercioDAO {
    constructor(connection) {
        this.connection = connection;
    }
    buscaComercio(id) {
        let buscaIdComercio = this.connection.consulta('SELECT * FROM COMERCIO WHERE ID = ' + id);
        return {
            imagem: buscaIdComercio[0].IMAGEM,
            endereco: buscaIdComercio[0].ENDERECO,
            telefone: buscaIdComercio[0].TELEFONE,
            horarios: {
                entrada: buscaIdComercio[0].HORARIO_ENTRADA,
                saidaA: buscaIdComercio[0].HORARIO_SAIDA,
                entradaA: buscaIdComercio[0].HORARIO_ENTRADA_TARDE,
                saida: buscaIdComercio[0].HORARIO_SAIDA_TARDE
            },
            id: buscaIdComercio[0].ID
        }
    }
    buscaFrete(idComercio) {
        let buscaIdFrete = this.connection.consulta('SELECT * FROM FRETE WHERE ID_COMERCIO = ' + idComercio);
        let buscaFreteValores = this.connection.consulta('SELECT * FROM VALOR_FRETE WHERE ID_FRETE = ' + buscaIdFrete[0].ID);
        return {
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
    buscarProduto(idComercio) {
        let buscaIdProduto = this.connection.consulta('SELECT * FROM PRODUTO WHERE ID_COMERCIO = ' + idComercio);
        return buscaIdProduto.map(b => {
            return {
                nome: b.NOME,
                imagem: b.IMAGEM,
                preco: b.PRECO,
                estoque: b.ESTOQUE,
                tipoVenda: b.TIPO_VENDA
            }
        })
    }
    buscaSolicitacoesAtivas(idComercio){
        let buscaIdSolicitacoesAtivas = this.connection.consulta('SELECT * FROM VENDA WHERE ID_COMERCIO = ' + idComercio);
    }
}

module.exports = ComercioDAO;