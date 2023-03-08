const {Router} = require("express");
const { CreateUser, obtainUser } = require("../controllers/users.control");

const router = Router();

router.get("/api/v1/user/:userId/todos" , obtainUser )
router.post("/api/v1/users" , CreateUser )


module.exports= router;