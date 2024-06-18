const express = require("express");

const {
  getBarChartData,
  getPieChartData,
} = require("../controllers/chartController");

const router = express.Router();

/**Bar chart Route*/
router.get("/bar", getBarChartData);

/**Pie chart Route*/
router.get("/pie", getPieChartData);

module.exports = router;
