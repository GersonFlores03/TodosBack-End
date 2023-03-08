const categoryService = require("../service/category.service")

const CreateCategory = async (req, res) => {
    try {
        const newCategory = req.body;
        const result = await categoryService.create(newCategory)
        res.status(201).send(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports= {
    CreateCategory
}