const SubCategoryService = require("../service/subcategory.service")


const CreateSubCategory = async (req ,res) => {
    try {
       const newSubCategory = req.body;
       const result = await SubCategoryService.SubCategory(newSubCategory)
       res.status(201).send(result)
    } catch (error) {
       res.status(400).json(error)
    }
}

module.exports = {
   CreateSubCategory,
}