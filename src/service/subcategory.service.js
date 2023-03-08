const SubCategory = require("../models/subcategory.models")


class  SubCategoryService {
    static async SubCategory(newSubCategory){
        try {
            const result = await SubCategory.create(newSubCategory)
            return(result)
        } catch (error) {
            throw(error)
        }
    }
}

module.exports= SubCategoryService;


