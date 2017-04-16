const express = require('express');
const router = express.Router();
const colorController = require("../controllers/color_controller");

router.post("/", colorController.randomColor);

module.exports = router
