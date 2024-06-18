const statisticsService = require("../services/statisticsService");
const chartService = require("../services/chartService");

const getBarChartData = async (req, res) => {
  try {
    const { month } = req.query;

    if (!month) {
      return res.status(400).json({ message: "Month is required" });
    }

    const selectedMonthData = await statisticsService.getMonthData(month);
    const data = await chartService.barChart(selectedMonthData);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPieChartData = async (req, res) => {
  try {
    const { month } = req.query;

    if (!month) {
      return res.status(400).json({ message: "Month is required" });
    }

    const selectedMonthData = await statisticsService.getMonthData(month);
    const data = await chartService.pieChart(selectedMonthData);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getBarChartData, getPieChartData };
