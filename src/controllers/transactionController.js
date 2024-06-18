const transactionService = require("../services/transactionService");

const getTransactions = async (req, res) => {
  try {
    const { pageNo = 1, perPage = 10, search = "", month } = req.query;

    const data = await transactionService.allTransactions({
      pageNo,
      perPage,
      search,
      month,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getTransactions };
