const ProdutoController = require('../produto-controller');
const controller = new ProdutoController();


describe('Produto Controller Unit Test', () => {
    it('It should update product', (done) => {
        const req = { body: {} };
        jest.spyOn(controller, 'getDAO').mockReturnValue({ atualizaDadosProduto: () => { return 'teste' } });
        const res = {
            send: (response) => {
                expect(response).toBe('teste')
            }
        }
        controller.atualizaProduto(req, res);

        done();
    });

    it('It should delete product', (done) => {
        const req = { params: {} };
        jest.spyOn(controller, 'getDAO').mockReturnValue({ excluiProduto: () => { return 'teste' } });
        const res = {
            send: (response) => {
                expect(response).toBe('teste')
            }
        }
        controller.excluiProduto(req, res);

        done();
    });

    it('It should create product', (done) => {
        const req = { body: {} };
        jest.spyOn(controller, 'getDAO').mockReturnValue({ criaProduto: () => { return 'teste' } });
        const res = {
            send: (response) => {
                expect(response).toBe('teste')
            }
        }
        controller.criaProduto(req, res);

        done();
    });

    it('It should return product', (done) => {
        const req = { params: {} };
        jest.spyOn(controller, 'getDAO').mockReturnValue({ retornaProduto: () => { return 'teste' } });
        const res = {
            send: (response) => {
                expect(response).toBe('teste')
            }
        }
        controller.retornaProduto(req, res);

        done();
    });

    it('It should return product with market data', (done) => {
        const req = { params: {} };
        jest.spyOn(controller, 'getDAO').mockReturnValue({ buscarProduto: () => { return 'teste' } });
        const res = {
            send: (response) => {
                expect(response).toBe('teste')
            }
        }
        controller.buscarProduto(req, res);

        done();
    });
})