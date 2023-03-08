const TodoService = require("../service/todo.service")



const CreateTodo = async (req, res) => {
    try {
        const newTodo = req.body;
        const result = await TodoService.creatTodo(newTodo)
        res.status(201).send(result)
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports={
    CreateTodo
}