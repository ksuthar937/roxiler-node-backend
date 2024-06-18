const productsModel = require("../models/productsModel");

const getMonthData = async (month) => {
  try {
    const query = {};

    const monthNumber = new Date(Date.parse(month + " 1, 2021")).getMonth() + 1;
    // console.log(monthNumber);
    query.$expr = { $eq: [{ $month: "$dateOfSale" }, monthNumber] };

    const transactions = await productsModel.find(query);

    return transactions;
  } catch (error) {
    throw error;
  }
};

const calculateStats = async (data) => {
  try {
    const totalSale = data.reduce((acc, item) => acc + item.price, 0);

    let totalSoldItem = 0;
    let totalUnSoldItem = 0;

    data.forEach((item) => (item.sold ? totalSoldItem++ : totalUnSoldItem++));

    return {
      totalSale,
      totalSoldItem,
      totalUnSoldItem,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = { getMonthData, calculateStats };
