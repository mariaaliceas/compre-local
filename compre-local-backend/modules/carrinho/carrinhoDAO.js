class CarrinhoDAO {
    constructor(app) {
        this.app = app;
    }

    async getCarrinhoByIdUsuario(idUsuario) {
        const carrinhos = await this.app.database("carrinho")
            .leftJoin("comercio", "carrinho.idComercio", "comercio.idComercio")
            .where("carrinho.idUsuario", idUsuario)
            .select("*");

        return carrinhos;    
    }

    async getCarrinhoById(idCarrinho) {
        var carrinho = await this.app.database("carrinho").where({ idCarrinho: idCarrinho }).first();
    
        return carrinho;
    }

    async insert() {
        try {
            await this.app.database("carrinho")
            .insert(category);

            return {
                status: true,
                message: "Carrinho inserido com sucesso",
                code: 200
            }
        } catch (error) {
            return {
                status: false,
                message: error,
                code: 404
            }
        }
    }

    async update() {
        try {
            await this.app.database("carrinho")
            .update(category)
            .where({idCarrinho: carrinho.idCarrinho});

            return {
                status: true,
                message: "Carrinho atualizado com sucesso",
                code: 200
            }
        } catch (error) {
            return {
                status: false,
                message: "Ocorreu um erro ao atualizar carrinho",
                code: 404
            }
        }
    }

    async remove(idCarrinho) {
        try {
            await this.app.database("carrinho")
            .where({ idCarrinho: idCarrinho })
            .del();

            return {
                status: true,
                message: "Carrinho excluído com sucesso",
                code: 204
            }
        } catch (error) {
            return {
                status: false,
                message: "Ocorreu um erro ao excluir carrinho",
                code: 404
            }
        }
    }
}

module.exports = CarrinhoDAO;