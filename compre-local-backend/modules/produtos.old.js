module.exports = (app) => {
    const get = async (req, res) => {
        const produtos = await app.database("produto")
        .limit(10)
        .join("comercio", "produto.idComercio", "comercio.idComercio")
        .select("*");

        return res.json(produtos);
    }

    const getById = async (req, res) => {
        const idCategory = req.params.id;

        if(!idCategory) {
            return res.status(400).json({ err: "Id da categoria não informado"});
        }

        category = await app.database("categories").where({ id: idCategory }).first();

        if (!category){
            return res.status(400).json({ err: "Categoria não encontrada"});
        }
    
        return res.json(category);
    }

    const save = async (req, res) => {
        const category = { ...req.body };

        category.id = req.params.id ?? false;

        if(!category.name) {
            return res.json({error: "Nome da categoria não informado"});
        }

        category.image = "category.jpg";

        if (req.params.id) {
            await app.database("categories")
                .update(category)
                .where({ id: category.id })
                .then(() => res.status(200).json({success: "Categoria atualizada com sucesso!"}))
                .catch((err) => res.status(500).send(err));
        } else {
            await app.database("categories")
                .insert(category)
                .then(() => res.status(200).json({success: "Categoria cadastrada com sucesso!"}))
                .catch((err) => res.status(500).send(err));
        }
    }

    const remove = async (req, res) => {

        const idCategory = req.params.id;

        if(!idCategory) {
            return res.status(400).json({ err: "Id da categoria não informado"});
        }

        categoryExists = await app.database("categories").where({ id: idCategory }).first();

        if (!categoryExists){
            return res.status(400).json({ err: "Categoria não encontrada"});
        }

        await app.database("categories").where({ id: idCategory }).del();

        res.status(204).json({success: "Categoria excluída com sucesso"});
    }

    return { get }
}