const express = require("express");

const {
  getBarChartData,
  getPieChartData,
} = require("../controllers/chartController");

const router = express.Router();

/**Bar chart*/
router.get("/chart/bar", getBarChartData);

/**Pie chart*/
router.get("/chart/pie", getPieChartData);

module.exports = router;
