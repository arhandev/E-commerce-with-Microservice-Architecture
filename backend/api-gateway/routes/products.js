const express = require("express");
const router = express.Router();
const productsHandler = require("./handler/products");

const verifyToken = require('../middlewares/verifyToken')
const permission = require('../middlewares/permission')


router.get("/", productsHandler.getAll);
router.get("/:id", productsHandler.get);

// need authentication
router.post("/", verifyToken, permission('admin'), productsHandler.create);
router.put("/:id", verifyToken, permission('admin'), productsHandler.update);
router.delete("/:id", verifyToken, permission('admin'), productsHandler.destroy);

module.exports = router;
