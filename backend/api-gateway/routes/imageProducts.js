const express = require("express");
const router = express.Router();

const imageProductsHandler = require("./handler/image-products");


router.post('/', imageProductsHandler.create)
router.delete('/:id', imageProductsHandler.destroy)

module.exports = router;
