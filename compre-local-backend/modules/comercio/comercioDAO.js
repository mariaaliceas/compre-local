class ComercioDAO {
    constructor(app) {
        this.app = app;
    }

    async get()
    {
        const comercios = await this.app.database("comercio").select("*");
        return comercios;
    }

    async getByTpComercio(tpComercio)
    {
        const comercios = await this.app.database("comercio").where({ tpComercio: tpComercio });
        return comercios;
    }

    async getComercioById(idComercio)
    {
        const comercio = await this.app.database("comercio").where({ idComercio: idComercio }).first();
        return comercio;
    }

    async filter(filter)
    {
        const comercios = await this.app.database("comercio")
        .whereLike('nomeComercio', '%'+filter.comercio+'%');
        console.log(comercios);
        return comercios;
    }

    async insert(comercio)
    {
        try {
            await this.app.database("comercio")
            .insert(comercio);

            return {
                status: true,
                message: "Comércio inserido com sucesso",
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

    async update(comercio)
    {
        try {
            await this.app.database("comercio")
            .update(comercio)
            .where({idComercio: comercio.idComercio});

            return {
                status: true,
                message: "Comércio atualizado com sucesso",
                code: 200
            }
        } catch (error) {
            return {
                status: false,
                message: "Ocorreu um erro ao atualizar comércio",
                code: 404
            }
        }
    }
}

module.exports = ComercioDAO;