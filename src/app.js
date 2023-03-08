const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const db = require("./utils/database")
const initModels = require("./models/initModels")
const usersRouter = require("./routers/user.routes")
const subcategoryRouter = require("./routers/subCategory.routes")
const todoRouter = require("./routers/todo.routes")
const categoryRouter = require("./routers/category.routes")

initModels()

const app = express();
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

const PORT = 8000;


db.authenticate()
.then(()=>{
     console.log("Datos de base autenticado")
})
.catch((error)=> {
     console.log("Error en la base de datos" , error)
})

db.sync({alter: true})
.then(()=>{
     console.log("Sincronizada")
})
.catch((error) =>{
    console.log(error)
})


app.get("/" , (req, res) => {
     res.send("Servidor Abierto")
}) 

app.use(usersRouter)
app.use(subcategoryRouter)
app.use(todoRouter)
app.use(categoryRouter)


app.listen(PORT , () => {
     console.log(`Estas en el servidor ${PORT}`)
})


