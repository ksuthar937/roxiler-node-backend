const productsModel = require("../models/productsModel");

const allTransactions = async ({ pageNo, perPage, search, month }) => {
  try {
    const query = {};

    if (search) {
      query.$or = [
        { title: new RegExp(search, "i") },
        { description: new RegExp(search, "i") },
        { price: parseFloat(search) || 0 },
      ];
    }

    if (month) {
      const monthNumber =
        new Date(Date.parse(month + " 1, 2021")).getMonth() + 1;
      console.log(monthNumber);
      query.$expr = { $eq: [{ $month: "$dateOfSale" }, monthNumber] };
    }

    // console.log(query);
    const transactions = await productsModel
      .find(query)
      .skip((pageNo - 1) * perPage)
      .limit(parseInt(perPage))
      .exec();

    return {
      transactions,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = { allTransactions };
