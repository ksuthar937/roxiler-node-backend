const axios = require("axios");
const productsModel = require("../models/productsModel");

/** Fetch the JSON from the third party API */

const getDataFromAPI = async () => {
  try {
    const apiURL = process.env.THIRD_PARTY_API_URL;
    const products = await axios.get(apiURL);
    return products.data;
  } catch (error) {
    throw error;
  }
};

/** Seed Data into DataBase */

const seedData = async (data) => {
  try {
    // return await productsModel.insertMany(data);

    const operations = data.map((product) => ({
      updateOne: {
        filter: { id: product.id },
        update: { $set: product },
        upsert: true,
      },
    }));
    return await productsModel.bulkWrite(operations);
  } catch (error) {
    throw error;
  }
};

/** Fetched updated data */

const fetchData = async () => {
  try {
    return await productsModel.find({});
  } catch (error) {
    throw error;
  }
};

module.exports = { getDataFromAPI, seedData, fetchData };
