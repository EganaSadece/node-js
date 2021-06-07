const express = require('express');
const router = express.Router();
const controller = require("../Controller/controller")

router.get("/", controller.homepage)

router.all("/new/article", controller.addArticle)

router.all("/edit/article/:id", controller.editArticle)

router.get("/article/:id", controller.showOneArticle)

router.get("/delete/article/:id", controller.deleteArticle)

module.exports = router 