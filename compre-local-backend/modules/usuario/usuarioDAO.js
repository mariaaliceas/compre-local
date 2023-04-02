class UsuarioDAO {
    constructor(app) {
        this.app = app;
    }

    async get() {
        const users = await this.app.database("usuario")
        .select("idUsuario","nome","email","telefone", "endereco");

        return users;
    }

    async getUserbyIdUser(idUsuario)
    {
        const user = await this.app.database("usuario")
        .where({ idUsuario: idUsuario })
        .first();

        return user
    }

    async insert(usuario)
    {
        try {
            await this.app.database("usuario")
            .insert(usuario);

            return {
                status: true,
                message: "Usuario inserido com sucesso",
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
}

module.exports = UsuarioDAO;