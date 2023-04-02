class CategoriesDAO {
    constructor(app) {
        this.app = app;
    }

    async get() {
        const categories = await this.app.database("categories")
        .select("*");
        return categories;
    }

    async getById(idCategory)
    {
        const category = await this.app.database("categories")
        .where({ id: idCategory })
        .first();

        return category
    }

    async insert(category)
    {
        try {
            await this.app.database("categories")
            .insert(category);

            return {
                status: true,
                message: "Categoria inserida com sucesso",
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

    async update(category)
    {
        try {
            await this.app.database("categories")
            .update(category)
            .where({id: category.id});

            return {
                status: true,
                message: "Categoria atualizada com sucesso",
                code: 200
            }
        } catch (error) {
            return {
                status: false,
                message: "Ocorreu um erro ao atualizar categoria",
                code: 404
            }
        }
    }
}

module.exports = CategoriesDAO;