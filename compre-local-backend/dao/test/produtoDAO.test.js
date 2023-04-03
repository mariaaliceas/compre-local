const ProdutoDAO = require('../produtoDAO');

describe('Produto DAO Unit Test', () => {
    it('It should update product', (done) => {
        const dao = new ProdutoDAO({
            consulta: () => {
                return [{
                    NOME: 1,
                    ESTOQUE: '30',
                    PRECO: 'R$ 5,00',
                    TIPO_VENDA: 'Encomenda',
                    TIPO_ESTOQUE: 'Kg',
                    TIPO_PRECO: 'Kg',
                }]
            }
        });

        const id = 1;
        const response = dao.atualizaDadosProduto(id);
        expect(response).toBe(undefined);

        done();
    });

    it('It should delete product', (done) => {
        const dao = new ProdutoDAO({
            consulta: () => { }
        });

        const id = 1;
        const response = dao.excluiProduto(id);
        expect(response).toBe(undefined);

        done();
    });

    it('It should create product', (done) => {
        const dao = new ProdutoDAO({
            consulta: () => {
                return [{
                    MAXIMO_ID: 1
                }]
            }
        });

        const id = 1;
        const response = dao.criaProduto(id);
        expect(response).toBe(undefined);

        done();
    });

    it('It should return product', (done) => {
        const dao = new ProdutoDAO({
            consulta: () => {
                return [{
                    ID: 1,
                    NOME: 'Laranja',
                    IMAGEM: 'orange',
                    PRECO: 'R$ 5,00',
                    ESTOQUE: '30 Kg',
                    TIPO_VENDA: 'Varejo',
                    TIPO_ESTOQUE: 'Kg',
                    TIPO_PRECO: 'Kg'
                }]
            }
        });

        const id = 1;
        const response = dao.buscarProduto(id);
        expect(response).toEqual([{ "estoque": "30 Kg", "id": 1, "imagem": "orange", "nome": "Laranja", "preco": "R$ 5,00", "tipoEstoque": "Kg", "tipoPreco": "Kg", "tipoVenda": "Varejo" }]);

        done();
    });




})