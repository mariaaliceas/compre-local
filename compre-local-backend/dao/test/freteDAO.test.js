const FreteDAO = require('../freteDAO');

describe('Frete DAO Unit Test', () => {
    it('It should return delivery freight', (done) => {
        const dao = new FreteDAO({
            consulta: () => {
                return [{
                    ID: 1,
                    DISTANCIA_MAXIMA: '30 Km',
                    TIPO: 'Taxa fixa',
                    VALOR: 'R$ 4,00',
                    DISTANCIA_LIMITE: '10 Km',

                }]
            }
        });

        const idComercio = 1;
        const response = dao.buscaFrete(idComercio);
        expect(response).toEqual({ "distanciaMax": "30 Km", "id": 1, "tipo": "Taxa fixa", "valores": [{ "distanciaLim": "10 Km", "valor": "R$ 4,00" }] });

        done();
    });

    it('It should update delivery freight', (done) => {
        const dao = new FreteDAO({
            consulta: () => { }
        });

        const id = 1, tipo = 'Taxa fixa', distanciaMax = '30 Km', valor = 'R$ 4,00', distanciaLim = '100 Km';
        const response = dao.atualizaDadosFrete(id,tipo, distanciaMax, valor, distanciaLim);
        expect(response).toBe(undefined);

        done();
    });
})