const {DataTypes} = require("sequelize")
const db = require("../utils/database")

const Todos = db.define("todos" , {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
       type: DataTypes.STRING(50),
       allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
     },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false

    },

    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "categories"
     },

    
    sub_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }




}, {
    timestamps: true,
    updatedAt: false,
    createdAt: "created_at"
})

module.exports= Todos;