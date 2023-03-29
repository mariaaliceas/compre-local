const FretesController = require('../frete-controller');
const controller = new FretesController();


describe('Frete Controller Unit Test', () => {
    it('It should update delivery freight', (done) => {
        const req = { body: {} };
        jest.spyOn(controller, 'getDAO').mockReturnValue({ atualizaDadosFrete: () => { return 'teste' } });
        const res = {
            send: (response) => {
                expect(response).toBe('teste')
            }
        }
        controller.atualizaFrete(req, res);

        done();
    })
})