const axios = require("axios");

const fetchCombinedData = async (month) => {
  try {
    const [barDataResponse, pieDataResponse, statsDataResponse] =
      await Promise.all([
        axios.get(`${process.env.BASE_URL}/chart/bar?month=${month}`),
        axios.get(`${process.env.BASE_URL}/chart/pie?month=${month}`),
        axios.get(`${process.env.BASE_URL}/statistics?month=${month}`),
      ]);

    const combinedData = {
      barData: barDataResponse.data,
      pieData: pieDataResponse.data,
      statsData: statsDataResponse.data,
    };
    return combinedData;
  } catch (error) {
    throw error;
  }
};

module.exports = { fetchCombinedData };
