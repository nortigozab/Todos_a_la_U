require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const port = process.env.PORT;
const host = process.env.HOST;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();
app.use(cors());
app.use(express.json());

const routes = require("./routes/routes");

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server started at ${port}`);
  console.log(`Go to http://${host}:${port}`);
});
