// config.js
const dotenv = require("dotenv");
const path = require("path"); // el objecto path permitira cargar el archivo .env que necesitemos de acuerdo al entorno deseado.
console.log(process.env.NODE_ENV);

dotenv.config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "desarrollo",
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 3000,
};
