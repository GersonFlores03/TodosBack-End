const {DataTypes} = require("sequelize")
const db = require("../utils/database")

const SubCategory = db.define("subcategory" , {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "categories"
     },

} , {
   timestamps: true
})

module.exports= SubCategory;