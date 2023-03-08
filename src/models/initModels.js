const Users = require("../models/users.model")
const Todos = require("../models/todos.model")
const SubCategory = require("../models/subcategory.models")
const Category = require("../models/category.models")




const initModels = () => {
      Users.hasMany(Todos , {foreignKey: "user_id"})
      Todos.belongsTo(Users , {foreignKey: "user_id"})
    
      Category.hasMany(Todos , {foreignKey: "categoryId"})
      Todos.belongsTo(Category , {foreignKey: "categoryId"})

     SubCategory.hasMany(Todos , {foreignKey: "sub_id"})
     Todos.belongsTo(SubCategory , {foreignKey: "sub_id"})

     Category.hasMany(SubCategory, {foreignKey: "categoryId"})
     SubCategory.belongsTo(Category, {foreignKey: "categoryId"})

}


module.exports = initModels;