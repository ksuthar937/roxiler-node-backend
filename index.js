const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const dbConfig = require("./db/config");
const productRoute = require("./src/routes/productsRoute");
const transactionRoute = require("./src/routes/transactionRoute");
const statisticsRoute = require("./src/routes/statisticsRoute");
const chartRoute = require("./src/routes/chartRoute");

const app = express();
dotenv.config();

app.use(express.json());

app.use("/api/v1", productRoute);
app.use("/api/v1", transactionRoute);
app.use("/api/v1", statisticsRoute);
app.use("/api/v1", chartRoute);

// app.get("/test", (req, res) => {
//   res.send("Test route");
// });

//Database connection
dbConfig();

app.listen(process.env.PORT, () => {
  console.log(colors.bgCyan(`Server listening on port ${process.env.PORT}`));
});
