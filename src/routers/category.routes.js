const {Router} = require("express");
const { CreateCategory } = require("../controllers/category.control");

const router = Router();

router.post("/api/v1/category" , CreateCategory  )


module.exports= router;
