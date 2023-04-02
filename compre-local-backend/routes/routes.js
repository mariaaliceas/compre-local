module.exports = (app) => {

    app.route("/categories")
        .get(app.modules.categories.categoriesController.get)
        .post(app.modules.categories.categoriesController.save)
        .delete(app.modules.categories.categoriesController.remove)

    app.route("/categories/:id")
        .get(app.modules.categories.categoriesController.getById)
        .put(app.modules.categories.categoriesController.save)
        .delete(app.modules.categories.categoriesController.remove)

    app.route("/carrinho")
        .post(app.modules.carrinho.carrinhoController.save)

    app.route("/carrinho/:idCarrinho")
        .get(app.modules.carrinho.carrinhoController.getCarrinhoById)
        .post(app.modules.carrinho.carrinhoController.save)
        .delete(app.modules.carrinho.carrinhoController.remove)

    app.route("/carrinho/usuario/:idUsuario")
        .get(app.modules.carrinho.carrinhoController.getCarrinhoByIdUsuario)

    app.route("/comercio")
        .get(app.modules.comercio.comercioController.get)
        .post(app.modules.comercio.comercioController.save)

    app.route("/comercio/:idComercio")
        .get(app.modules.comercio.comercioController.getComercioById)
        .post(app.modules.comercio.comercioController.save)
        .delete(app.modules.comercio.comercioController.remove)

    app.route("/filter/comercio")
        .post(app.modules.comercio.comercioController.filter)

    app.route("/comercios/:tpComercio")
        .get(app.modules.comercio.comercioController.getComercioByTipo)

    app.route("/itens-carrinho/:idCarrinho")
        .get(app.modules.itemCarrinho.itemCarrinhoController.getItensByIdCarrinho)
        .post(app.modules.itemCarrinho.itemCarrinhoController.save)

    app.route("/itens-carrinho/:idCarrinho/:idItemCompra")
        .post(app.modules.itemCarrinho.itemCarrinhoController.save)
        .delete(app.modules.itemCarrinho.itemCarrinhoController.remove)

    app.route("/pedido")
        .get(app.modules.pedido.pedidoController.get)

    app.route("/pedido/:idPedido")
        .get(app.modules.pedido.pedidoController.getPedidoById)
        .post(app.modules.pedido.pedidoController.save)
        .delete(app.modules.pedido.pedidoController.remove)

    app.route("/compra/finalizar-pedido")
        .get(app.modules.pedido.pedidoController.get)
        .post(app.modules.pedido.pedidoController.save)

    app.route("/compra/finalizar-carrinho-itens-compra")
        .post(app.modules.pedido.pedidoController.alterCarrinho)

    app.route("/produtos")
        .get(app.modules.produtos.produtosController.get)

    app.route("/users")
        .get(app.modules.usuario.usuarioController.get)
        .post(app.modules.usuario.usuarioController.save)

    app.route("/users/:idUser")
        .get(app.modules.usuario.usuarioController.getUserbyIdUser)
}