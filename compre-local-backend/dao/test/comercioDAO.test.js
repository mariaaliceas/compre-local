const ComercioDAO = require('../comercioDAO');



describe('Comercio DAO Unit Test', () => {
    it('It should return market data', (done) => {
        const dao = new ComercioDAO({
            consulta: () => {
                return [{
                    IMAGEM: 'imagem',
                    ENDERECO: 'Rua',
                    TELEFONE: '99-99999999',
                    HORARIO_ENTRADA: '08:00',
                    HORARIO_SAIDA: '12:00',
                    HORARIO_ENTRADA_TARDE: '13:00',
                    HORARIO_SAIDA_TARDE: '18:00',
                    ID: 1
                }]
            }
        });

        const id = 1;
        const response = dao.buscaComercio(id);
        expect(response).toEqual({ "endereco": "Rua", "horarios": { "entrada": "08:00", "entradaA": "13:00", "saida": "18:00", "saidaA": "12:00" }, "id": 1, "imagem": "imagem", "telefone": "99-99999999" });

        done();
    })

    it('It should return market active sells', (done) => {
        const dao = new ComercioDAO({
            consulta: () => {
                return [{
                    TIPO: 'Pedido',
                    ID: 1,
                    VALOR: 'R$ 10,00',
                    DATA_PEDIDO: '10/03/2023',
                    DATA_ENTREGA: '10/03/2023',
                    VOLUME: 'Kg',
                    QUANTIDADE: '8',
                    NOME: 'Laranja',
                    PAGAMENTO: 'Dinheiro',
                }]
            }
        });

        const idComercio = 1;
        const response = dao.buscaSolicitacoesAtivas(idComercio);
        expect(response).toEqual([{ "dataEntrega": "10/03/2023", "dataPedido": "10/03/2023", "numero": 1, "pagamento": "Dinheiro", "produto": "Laranja", "quantidade": "8", "tipoVenda": "Pedido", "valor": "R$ 10,00", "volume": "Kg" }]);

        done();
    });

    it('It should return market all sells', (done) => {
        const dao = new ComercioDAO({
            consulta: () => {
                return [{
                    TIPO: 'Pedido',
                    ID: 1,
                    VALOR: 'R$ 10,00',
                    DATA_PEDIDO: '10/03/2023',
                    DATA_ENTREGA: '10/03/2023',
                    VOLUME: 'Kg',
                    QUANTIDADE: '8',
                    NOME: 'Laranja',
                    PAGAMENTO: 'Dinheiro',
                }]
            }
        });

        const idComercio = 1;
        const response = dao.buscaHistoricoVenda(idComercio);
        expect(response).toEqual([{ "dataEntrega": "10/03/2023", "dataPedido": "10/03/2023", "numero": 1, "pagamento": "Dinheiro", "produto": "Laranja", "quantidade": "8", "tipoVenda": "Pedido", "valor": "R$ 10,00", "volume": "Kg" }]);

        done();
    })
})