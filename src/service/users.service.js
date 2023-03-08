const Category = require("../models/category.models")
const SubCategory = require("../models/subcategory.models")
const Todos = require("../models/todos.model")
const Users = require("../models/users.model")



class UserService {

   static async obtainUsers(userId){
    try {
        const result = await Users.findByPk(userId,{
            include: [
                {
                 model: Todos,
                   include: [ {
                      model: Category,
                   },
                   {
                    model: SubCategory,
                   }
                  ]
                },

               
            ]
        })
        return(result)
    } catch (error) {
        throw(error)
    }
   }


    static async UserCreate(newUser){
        try {
            const result = await Users.create(newUser)
            return(result)
        } catch (error) {
            throw(error)
        }
    }
}

module.exports= UserService