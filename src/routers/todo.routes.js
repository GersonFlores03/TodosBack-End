const {Router} = require("express");
const { CreateTodo } = require("../controllers/todo.control");

const router = Router();

router.post("/api/v1/todos" , CreateTodo )


module.exports= router;