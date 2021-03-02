const express = require("express");
const router = express.Router();
const mediaHandler = require("./handler/media");

const verifyToken = require('../middlewares/verifyToken');


router.post("/", verifyToken, mediaHandler.create);
router.get("/", verifyToken, mediaHandler.getAll);
router.delete("/:id", verifyToken, mediaHandler.deleteID);

module.exports = router;
