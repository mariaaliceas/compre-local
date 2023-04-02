const UsuarioDAO = require('../usuario/usuarioDAO.js');

module.exports = (app) => {
    const get = async (req, res) => {
        var Usuario = getUsuarioDAO();
        const usuarios = await Usuario.get();

        return res.json(usuarios);
    }

    const getUserbyIdUser = async (req, res) => {
        const idUser = req.params.idUser;

        if(!idUser) {
            return res.status(400).json({ err: "Id do usuário não informado"});
        }

        var Usuario = getUsuarioDAO();
        const usuario = await Usuario.getUserbyIdUser(idUser);

        if (!usuario){
            return res.status(400).json({ err: "Usuário não encontrado!"});
        }
    
        return res.json(usuario);
    }

    const save = async (req, res) => {
        const user = { ...req.body };

        var Usuario = getUsuarioDAO();
        const response = await Usuario.insert(user);
        return res.status(response.code).json(response.message);
    }

    const getUsuarioDAO = () => {
        return new UsuarioDAO(app);
    }

    return { get, save, getUserbyIdUser }
}