const {DataTypes} = require("sequelize")
const db = require("../utils/database")

const Category = db.define("category" , {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
        
    },

    name: {
       type: DataTypes.STRING(30),
       allowNull: false
    },
    
    /* subcategory_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }*/
  
} ,{
    timestamps: false
} )


module.exports= Category;