const PedidoDAO = require('../pedido/pedidoDAO.js');
const CarrinhoDAO = require('../carrinho/carrinhoDAO.js');
const ItemCarrinhoDAO = require('../itemCarrinho/itemCarrinhoDAO.js');

module.exports = (app) => {
    const get = async (req, res) => {
        var Pedido = getPedidoDAO();
        var pedidos = await Pedido.get();

        return res.json(pedidos);
    }

    const getPedidoById = async (req, res) => {
        const idPedido = req.params.idPedido;

        if(!idPedido) {
            return res.status(400).json({ err: "Id do pedido não informado"});
        }

        var Pedido = getPedidoDAO();
        var pedido = await Pedido.getPedidoById(idPedido);

        if (!pedido){
            return res.status(400).json({ err: "Pedido não encontrado"});
        }
    
        return res.json(pedido);
    }

    const save = async (req, res) => {
        const pedido = { ...req.body };

        pedido.idPedido = req.params.idPedido ?? false;

        if(!pedido.codigo || pedido.codigo === "") {

            if(!pedido.total || pedido.total < 0) {
                return res.status(404).json({error: "Valores inválidossss"});
            }

            return res.status(404).json({error: "Código do pedido não informado"});
        }

        var Pedido = getPedidoDAO();
        var codigo = await Pedido.getPedidoByCodido(pedido.codigo);

        if (codigo.length > 0) {

            if(!pedido.total || pedido.total < 0) {
                return res.status(404).json({error: "Valores inválidos"});
            }

            return res.status(404).send({err: "Código de pedido já existe"});
        }

        if (pedido.codigo.length > 255) {
            return res.status(404).send({err: "Código de pedido deve conter até 255 caracteres."});
        }

        if(pedido.total === null || pedido.total < 0) {
            return res.status(404).json({error: "O valor do pedido não foi informado"});
        }

        var response = null;
        if (req.params.idPedido) {
            response = await Pedido.update(pedido);
        } else {
            response = await Pedido.persistePedido(pedido);
        }

        return res.status(response.code).json(response.message);
    }

    const remove = async (req, res) => {
        const idPedido = req.params.idPedido;

        if(!idPedido) {
            return res.status(400).json({ err: "Id do pedido não informado"});
        }

        var Pedido = getPedidoDAO();
        var pedidoExists = await Pedido.getPedidoById(idPedido);

        if (!pedidoExists){
            return res.status(400).json({ err: "Pedido não encontrada"});
        }

        var response = await Pedido.remove(idPedido);
        return res.status(response.code).json(response.message);
    }

    const alterCarrinho = async (req, res) => {
        const data = { ...req.body };

        var Carrinho = getCarrinhoDAO();
        const carrinhoExists = await Carrinho.getCarrinhoById(data.idCarrinho);

        if (!carrinhoExists) {
            return res.status(404).json("Carrinho não encontrado");
        }

        try {
            const ItemCompra = getItemCompraDAO();
            await ItemCompra.remove(data.idCarrinho);
        } catch (error) {
            return res.status(404).json("Ocorreu um erro ao registrar o pedido.");
        }

        try {
            await Carrinho.remove(data.idCarrinho); 
        } catch (error) {
            return res.status(404).json("Ocorreu um erro ao registrar o pedido.");
        }

        return res.status(200).json("Pedido finalizado com sucesso.")
    }

    const getPedidoDAO = () => {
        return new PedidoDAO(app);
    }

    const getCarrinhoDAO = () => {
        return new CarrinhoDAO(app);
    }

    const getItemCompraDAO = () => {
        return new ItemCarrinhoDAO(app);
    }

    return { get, getPedidoById, save, alterCarrinho, remove }
}