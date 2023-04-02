const CarrinhoDAO = require('../carrinho/carrinhoDAO.js');
module.exports = (app) => {
    const getCarrinhoByIdUsuario = async (req, res) => {
        const idUsuario = req.params.idUsuario;

        if (!idUsuario) {
            return res.status(400).json({ err: "Id do usuário não informado"});
        }

        var Carrinho = getCarrinhoDAO();
        const carrinhos = await Carrinho.getCarrinhoByIdUsuario(idUsuario);

        // return res.json(carrinhos.length < 1);
        if (carrinhos.length < 1){
            return res.status(400).json({ err: "Carrinho não encontrado"});
        }
        
        return res.json(carrinhos);
    }

    const getCarrinhoById = async (req, res) => {
        const idCarrinho = req.params.idCarrinho;

        if (!idCarrinho) {
            return res.status(400).json({ err: "Id do carrinho não informado"});
        }

        var Carrinho = getCarrinhoDAO();
        const carrinho = Carrinho.getCarrinhoById(idCarrinho);

        if (!carrinho){
            return res.status(400).json({ err: "Carrinho não encontrado"});
        }
    
        return res.json(carrinho);
    }

    const save = async (req, res) => {
        const carrinho = { ...req.body };

        carrinho.idCarrinho = req.params.idCarrinho ?? false;

        if(!carrinho.idUsuario) {
            return res.json({error: "Usuário não informado"});
        }

        var Carrinho = getCarrinhoDAO();

        if (req.params.idCarrinho) {
            const response = await Carrinho.update(carrinho);
            return res.status(response.code).json(response.message);
        } else {
            const response = await Carrinho.insert(carrinho);
            return res.status(response.code).json(response.message);
        }
    }

    const remove = async (req, res) => {

        const idCarrinho = req.params.idCarrinho;

        if(!idCarrinho) {
            return res.status(400).json({ err: "Id do carrinho não informado"});
        }

        var Carrinho = getCarrinhoDAO();
        const carrinhoExists = Carrinho.getCarrinhoById(idCarrinho);

        if (!carrinhoExists){
            return res.status(400).json({ err: "Carrinho não encontrado"});
        }

        const response = await Carrinho.remove(idCarrinho);
        return res.status(response.code).json(response.message);
    }

    const getCarrinhoDAO = () => {
        return new CarrinhoDAO(app);
    }

    return { getCarrinhoByIdUsuario, getCarrinhoById, save, remove }
}