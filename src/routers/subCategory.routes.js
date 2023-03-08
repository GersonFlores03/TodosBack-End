const {Router} = require("express");
const { CreateSubCategory } = require("../controllers/subcategory.control");

const router = Router();

router.post("/api/v1/subcategory" , CreateSubCategory  )

module.exports= router;