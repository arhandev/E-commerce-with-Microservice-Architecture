const express = require("express");
const router = express.Router();
const productsHandler = require("./handler/products");

const verifyToken = require('../middlewares/verifyToken')

router.get("/", productsHandler.getAll);
router.get("/:id", productsHandler.get);

// need authentication
router.post("/", verifyToken, productsHandler.create);
router.put("/:id", verifyToken, productsHandler.update);
router.delete("/:id", verifyToken, productsHandler.destroy);

module.exports = router;
