const express = require("express");

const { getStats } = require("../controllers/statisticsController");

const router = express.Router();

/**Route for statistics (Total Sale Amount / Sold / Not Sold)*/
router.get("/", getStats);

module.exports = router;
