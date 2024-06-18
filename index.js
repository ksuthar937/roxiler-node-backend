const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const dbConfig = require("./db/config");

const app = express();
dotenv.config();

app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Test API");
});

//Database connection
dbConfig();

app.listen(process.env.PORT, () => {
  console.log(colors.bgCyan(`Server listening on port ${process.env.PORT}`));
});
