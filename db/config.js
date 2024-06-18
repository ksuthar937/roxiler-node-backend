const mongoose = require("mongoose");
const colors = require("colors");

const dbConfig = () =>
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(colors.bgMagenta("DB Connection successfully")))
    .catch(() => console.log(colors.bgRed("DB Connection failed!")));

module.exports = dbConfig;
