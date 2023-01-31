const express = require("express");
const router = express.Router();
const transactionsHandler = require("./handler/transactions");

router.post("/", transactionsHandler.create);
router.get("/", transactionsHandler.get);

module.exports = router;
