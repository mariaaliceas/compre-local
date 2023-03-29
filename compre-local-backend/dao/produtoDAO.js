class ProdutoDAO {
    constructor(connection) {
        this.connection = connection;
    }

    atualizaDadosProduto(id, tipo, nome, estoque, preco, tipoEstoque, tipoPreco) {
        //console.log(id, tipo, nome, estoque, preco, tipoEstoque, tipoPreco);
        this.connection.consulta(`UPDATE PRODUTO SET TIPO_VENDA = '${tipo}', 
        NOME = '${nome}', 
        ESTOQUE = '${estoque}', 
        PRECO = '${preco}', 
        TIPO_VENDA = '${tipo}',
        TIPO_ESTOQUE = '${tipoEstoque}', 
        TIPO_PRECO = '${tipoPreco}' 
        WHERE ID = ${id}`);
    }
    excluiProduto(id) {
        this.connection.consulta(`DELETE FROM PRODUTO WHERE ID = ${id}`)

    }
    criaProduto(tipo,idComercio, nome, estoque, preco, tipoEstoque, tipoPreco) {
        const identificacao = this.connection.consulta(`SELECT MAX(ID) AS MAXIMO_ID FROM PRODUTO`);
        console.log(`INSERT INTO PRODUTO 
        (id, id_comercio, tipo, nome, estoque, preco) 
        VALUES 
        (${identificacao[0].MAXIMO_ID + 1}, ${tipo}, ${nome}, ${estoque}, ${preco})`);

        this.connection.consulta(`INSERT INTO PRODUTO 
        (id, id_comercio, tipo_venda, nome, estoque, preco) 
        VALUES 
        (${identificacao[0].MAXIMO_ID + 1}, '${idComercio}', '${tipo}', '${nome}', '${estoque}', '${preco}')`);
        
    }

    buscarProduto(idComercio) {
        let buscaIdProduto = this.connection.consulta('SELECT * FROM PRODUTO WHERE ID_COMERCIO = ' + idComercio);
        return buscaIdProduto.map(b => {
            return {
                id: b.ID,
                nome: b.NOME,
                imagem: b.IMAGEM,
                preco: b.PRECO,
                estoque: b.ESTOQUE,
                tipoVenda: b.TIPO_VENDA,
                tipoEstoque: b.TIPO_ESTOQUE,
                tipoPreco: b.TIPO_PRECO
            }
        })
    }

    retornaProduto(id) {
        let buscaIdProduto = this.connection.consulta('SELECT * FROM PRODUTO WHERE ID = ' + id);
        return {
            id: buscaIdProduto[0].ID,
            nome: buscaIdProduto[0].NOME,
            imagem: buscaIdProduto[0].IMAGEM,
            preco: buscaIdProduto[0].PRECO,
            estoque: buscaIdProduto[0].ESTOQUE,
            tipoVenda: buscaIdProduto[0].TIPO_VENDA,
            tipoEstoque: buscaIdProduto[0].TIPO_ESTOQUE,
            tipoPreco: buscaIdProduto[0].TIPO_PRECO
        }
    }

}
module.exports = ProdutoDAO;