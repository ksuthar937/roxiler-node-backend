const express = require("express");

const { getCombinedData } = require("../controllers/combinedDataController");

const router = express.Router();

/**Combined Route to get bar chart / pie chart / statistics data */
router.get("/", getCombinedData);

module.exports = router;
