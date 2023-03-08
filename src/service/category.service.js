const Category = require("../models/category.models")

class categoryService{
    static async create(newCategory){
        try {
            const result = await Category.create(newCategory)
            return(result)
        } catch (error) {
            throw(error)
        }
    }
}

module.exports= categoryService