module.exports = (app) => {
    const get = (req, res) => {
        const users = [
            {
                "id": 1,
                "name" : "Usuario 1"
            },
            {
                "id": 2,
                "name" : "Usuario 2"
            }
        ];

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

    return { get, save, getUserbyIdUser }
}