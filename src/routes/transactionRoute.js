const express = require("express");

const { getTransactions } = require("../controllers/transactionController");

const router = express.Router();

/**List the all transactions */
router.get("/transactions", getTransactions);

module.exports = router;
