const axios = require("axios");

const combinedDataService = require("../services/combinedDataService");

const getCombinedData = async (req, res) => {
  try {
    const { month } = req.query;

    if (!month) {
      return res.status(400).json({ message: "Month is required" });
    }

    const data = await combinedDataService.fetchCombinedData(month);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getCombinedData };
