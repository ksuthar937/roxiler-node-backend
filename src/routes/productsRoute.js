const express = require("express");

const { fetchDataAndSeedDB } = require("../controllers/productsController");

const router = express.Router();

/**Initialize the database route*/
router.get("/", fetchDataAndSeedDB);

module.exports = router;
