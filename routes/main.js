const express = require("express");
const { transmitData } = require("../controllers/main");
const router = express.Router();

router.route("/").get(transmitData);

module.exports = router;
