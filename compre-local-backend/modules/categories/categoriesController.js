const CategoriesDAO = require('../categories/categoriesDAO.js');

module.exports = (app) => {
    const get = async (req, res) => {
        var Categories = getCategoriesDAO();
        const categories = await Categories.get();
        return res.json(categories);
    }

    const getById = async (req, res) => {
        const idCategory = req.params.id;

        if(!idCategory) {
            return res.status(400).json({ err: "Id da categoria não informado"});
        }

        var Categories = getCategoriesDAO();
        const category = await Categories.getById(idCategory);

        if (!category){
            return res.status(400).json({ err: "Categoria não encontrada"});
        }
    
        return res.json(category);
    }

    const save = async (req, res) => {
        const category = { ...req.body };

        category.id = req.params.id ?? false;

        if(!category.name) {
            return res.status(400).json({error: "Nome da categoria não informado"});
        }

        category.image = "category.jpg";

        var Categories = getCategoriesDAO();
        if (req.params.id) {
            const response = await Categories.update(category);
            return res.status(response.code).json(response.message);
        } else {
            const response = await Categories.insert(category);
            return res.status(response.code).json(response.message);
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

    const getCategoriesDAO = () => {
        return new CategoriesDAO(app);
    }

    return { get, getById, save, remove }
}