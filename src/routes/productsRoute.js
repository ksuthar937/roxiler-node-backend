const express = require("express");

const { fetchDataAndSeedDB } = require("../controllers/productsController");

const router = express.Router();

/**Initialize the database*/
router.get("/products", fetchDataAndSeedDB);

module.exports = router;
