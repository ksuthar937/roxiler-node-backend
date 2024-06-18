const express = require("express");

const productRoute = require("./productsRoute");
const transactionRoute = require("./transactionRoute");
const statisticsRoute = require("./statisticsRoute");
const chartRoute = require("./chartRoute");
const combinedDataRoute = require("./combinedDataRoute");

const router = express.Router();

router.use("/products", productRoute);

router.use("/transactions", transactionRoute);

router.use("/statistics", statisticsRoute);

router.use("/chart", chartRoute);

router.use("/combined", combinedDataRoute);

module.exports = router;
