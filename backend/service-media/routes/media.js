var express = require("express");
var router = express.Router();
const isBase64 = require("is-base64");
const base64Img = require("base64-img");
const fs = require("fs");

const { Media } = require("../models");

const { HOST, PORT } = process.env;

router.post("/", function (req, res, next) {
    const image = req.body.image;

    if (!isBase64(image, { mimeRequired: true })) {
        return res.status(400).json({
            status: "error",
            message: "invalid message",
        });
    }

    base64Img.img(
        image,
        "./public/images",
        Date.now(),
        async (err, filepath) => {
            if (err) {
                return res.status(400).json({
                    status: "error",
                    message: err.message,
                });
            }
            const filename = filepath.split("/").pop();

            const media = await Media.create({ image: `images/${filename}` });
            return res.json({
                status: "success",
                data: {
                    id: media.id,
                    image: `${HOST}:${PORT}/images/${filename}`,
                },
            });
        }
    );
});

router.get("/", async (req, res, next) => {
    const media = await Media.findAll();

    const mediaUrl = media.map(item => {
        item.image = `${HOST}:${PORT}/${item.image}`;
        return item;
    });

    return res.json({
        status: "success",
        data: mediaUrl,
    });
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    const media = await Media.findByPk(id);

    if (!media) {
        return res.status(404).json({
            status: "error",
            message: "media not found",
        });
    }

    fs.unlink(`./public/${media.image}`, async err => {
        if (err) {
            return res.status(400).json({
                status: "error",
                message: err.message,
            });
        }
        await media.destroy();

        return res.json({
            status: "success",
            message: "image deleted",
        });
    });
});

module.exports = router;
