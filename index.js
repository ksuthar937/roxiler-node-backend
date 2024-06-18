const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");

const dbConfig = require("./db/config");
const routes = require("./src/routes/index");

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

//All defined routes
app.use("/api/v1", routes);

//Database connection
dbConfig();

app.listen(process.env.PORT, () => {
  console.log(colors.bgCyan(`Server listening on port ${process.env.PORT}`));
});
