
const UserService = require("../service/users.service")


const obtainUser = async(req , res) =>{
    try {
        const {userId} = req.params;
        const user = await UserService.obtainUsers(userId)
        res.json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}



const CreateUser = async(req, res) =>{
    try {
        const newUser = req.body;
        const result = await UserService.UserCreate(newUser)
        res.status(201).json(result)
    } catch (error) {
         res.status(400).json(error)
    }
}


module.exports= {
    obtainUser,
    CreateUser
}
