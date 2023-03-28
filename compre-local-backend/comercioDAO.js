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
    buscaSolicitacoesAtivas(idComercio) {
        let buscaIdSolicitacoesAtivas = this.connection.consulta("SELECT VENDA.ID, VENDA.TIPO, VENDA.VALOR, VENDA.DATA_PEDIDO, VENDA.DATA_ENTREGA, VENDA.VOLUME, VENDA.QUANTIDADE, VENDA.PAGAMENTO, PRODUTO.NOME FROM VENDA INNER JOIN PRODUTO ON VENDA.ID_PRODUTO = PRODUTO.ID WHERE VENDA.DATA_ENTREGA = '' AND VENDA.ID_COMERCIO = " + idComercio);
        return buscaIdSolicitacoesAtivas.map(b => {
            return {
                tipoVenda: b.TIPO,
                numero: b.ID,
                valor: b.VALOR,
                dataPedido: b.DATA_PEDIDO,
                dataEntrega: b.DATA_ENTREGA,
                volume: b.VOLUME,
                quantidade: b.QUANTIDADE,
                produto: b.NOME,
                pagamento: b.PAGAMENTO
            }
        })
    }
    buscaHistoricoVenda(idComercio) {
        let buscaIdSolicitacoesAtivas = this.connection.consulta("SELECT VENDA.ID, VENDA.TIPO, VENDA.VALOR, VENDA.DATA_PEDIDO, VENDA.DATA_ENTREGA, VENDA.VOLUME, VENDA.QUANTIDADE, VENDA.PAGAMENTO, PRODUTO.NOME FROM VENDA INNER JOIN PRODUTO ON VENDA.ID_PRODUTO = PRODUTO.ID WHERE VENDA.ID_COMERCIO = " + idComercio);
        return buscaIdSolicitacoesAtivas.map(b => {
            return {
                tipoVenda: b.TIPO,
                numero: b.ID,
                valor: b.VALOR,
                dataPedido: b.DATA_PEDIDO,
                dataEntrega: b.DATA_ENTREGA,
                volume: b.VOLUME,
                quantidade: b.QUANTIDADE,
                produto: b.NOME,
                pagamento: b.PAGAMENTO
            }
        })
    }
    retornaDadosComercio(id) {
        const comercio = this.buscaComercio(id); //1 === id
        const frete = this.buscaFrete(id);
        const produtos = this.buscarProduto(id);
        const solicitacoesAtivas = this.buscaSolicitacoesAtivas(id);
        const histVendas = this.buscaHistoricoVenda(id);
        comercio.solicitacoesAtivas = solicitacoesAtivas;
        comercio.histVendas = histVendas;
        comercio.frete = frete;
        comercio.produtos = produtos;
        return comercio;
    }
}


module.exports = ComercioDAO;