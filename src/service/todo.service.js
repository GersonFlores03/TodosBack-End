const Todo = require("../models/todos.model")

class TodoService{
  static async creatTodo(newTodo){
    try {
        const result = await Todo.create(newTodo)
        return result
    } catch (error) {
        throw(error)
    }
  }
}

module.exports = TodoService