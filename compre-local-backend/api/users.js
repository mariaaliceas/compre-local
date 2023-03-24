module.exports = (app) => {
    const get = async (req, res) => {
        const users = await app.database("usuario")
        .select("idUsuario","nome","email","telefone", "endereco");

        return res.json(users);
    }

    const getUserbyIdUser = async (req, res) => {
        const idUser = req.params.idUser;

        if(!idUser) {
            return res.status(400).json({ err: "Id do usuário não informado"});
        }

        usuario = await app.database("usuario")
        .where({ idUsuario: idUser });

        if (!usuario){
            return res.status(400).json({ err: "Usuário não encontrado!"});
        }
    
        return res.json(usuario);
    }

    const save = (req, res) => {
        const user = { ...req.body };

        return res.json(user)
    }

    const login = async (req, res) => {
        const user = { ...req.body };

        if(!user.email || !user.senha) {
            res.status(404).json("Credenciais do usuario não informadas");
        }

        var usuario = await app.database("usuario")
        .select('*')
        .whereLike('email', '%'+user.email+'%')
        .andWhereLike('senha', '%'+user.senha+'%')

        if(!usuario) {
            res.status(404).json("Usuário não encontrado");
        }

        return res.status(200).json({
            message: "Login efetuado com sucesso",
            user: usuario
        })
    }

    return { get, save, getUserbyIdUser, login }
}