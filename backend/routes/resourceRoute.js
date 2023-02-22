const express = require("express");
const { getAllResources } = require("../controllers/resourceController");

const router = express.Router();

router.route("/resources").get(getAllResources);

module.exports = router;
