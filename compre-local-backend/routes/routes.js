module.exports = (app) => {

    app.route("/users")
        .get(app.api.users.get)
        .post(app.api.users.save)

    app.route("/users/:idUser")
        .get(app.api.users.getUserbyIdUser)

    app.route("/categories")
        .get(app.api.categories.get)
        .post(app.api.categories.save)
        .delete(app.api.categories.remove)

    app.route("/categories/:id")
        .get(app.api.categories.getById)
        .put(app.api.categories.save)
        .delete(app.api.categories.remove)

    app.route("/carrinho/:idUsuario")
        .get(app.api.carrinho.get)

    app.route("/comercio/:tpComercio")
        .get(app.api.comercio.getComercioByTipo)

    app.route("/itens-carrinho/:idCarrinho")
        .get(app.api.item_carrinho.getItensByIdCarrinho)

    app.route("/compra/finalizar-pedido")
        .get(app.api.pedido.get)
        .post(app.api.pedido.save)

    app.route("/compra/finalizar-carrinho-itens-compra")
        .post(app.api.pedido.alterCarrinho)
}