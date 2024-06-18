const statisticsService = require("../services/statisticsService");

const getStats = async (req, res) => {
  try {
    const { month } = req.query;

    if (!month) {
      return res.status(400).json({ message: "Month is required" });
    }

    const selectedMonthData = await statisticsService.getMonthData(month);

    const stats = await statisticsService.calculateStats(selectedMonthData);

    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getStats };
