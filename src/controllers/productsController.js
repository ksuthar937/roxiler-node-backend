const productService = require("../services/productsService");

const fetchDataAndSeedDB = async (req, res) => {
  try {
    const data = await productService.getDataFromAPI();
    await productService.seedData(data);
    const db = await productService.fetchData();
    res.status(200).json(db);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { fetchDataAndSeedDB };
