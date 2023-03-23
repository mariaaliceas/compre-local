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

    app.route("/carrinho")
        .post(app.api.carrinho.save)

    app.route("/carrinho/:idCarrinho")
        .get(app.api.carrinho.getCarrinhoById)
        .post(app.api.carrinho.save)
        .delete(app.api.carrinho.remove)

    app.route("/carrinho/:idUsuario")
        .get(app.api.carrinho.get)

    app.route("/comercio")
        .get(app.api.comercio.get)
        .post(app.api.comercio.save)

    app.route("/comercio/:idComercio")
        .get(app.api.comercio.getComercioById)
        .post(app.api.comercio.save)
        .delete(app.api.comercio.remove)

    app.route("/filter/comercio")
        .post(app.api.comercio.filter)

    app.route("/comercio/:tpComercio")
        .get(app.api.comercio.getComercioByTipo)

    app.route("/itens-carrinho/:idCarrinho")
        .get(app.api.item_carrinho.getItensByIdCarrinho)
        .post(app.api.item_carrinho.save)

    app.route("/itens-carrinho/:idCarrinho/:idItemCompra")
        .post(app.api.item_carrinho.save)
        .delete(app.api.item_carrinho.remove)

    app.route("/pedido")
        .get(app.api.pedido.get)

    app.route("/pedido/:idPedido")
        .get(app.api.pedido.getPedidoById)
        .post(app.api.pedido.save)
        .delete(app.api.pedido.remove)

    app.route("/compra/finalizar-pedido")
        .get(app.api.pedido.get)
        .post(app.api.pedido.save)

    app.route("/compra/finalizar-carrinho-itens-compra")
        .post(app.api.pedido.alterCarrinho)

    app.route("/produtos")
        .get(app.api.produtos.get)
}