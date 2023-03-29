const ComercioController = require('../comercio-controller');
const controller = new ComercioController();


describe('Comercio Controller Unit Test', () => {
    it('It should return market data', (done) => {
        const req = { params: {} };
        jest.spyOn(controller, 'getDAO').mockReturnValue({ retornaDadosComercio: () => { return 'teste' } });
        const res = {
            send: (response) => {
                expect(response).toBe('teste')
            }
        }
        controller.buscaComercio(req, res);

        done();
    })
})