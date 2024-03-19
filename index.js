require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const customerRouter = require("./routers/customer");

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then((result) => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log("Error in DB Connection :- ", err.message);
  });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json());
app.use("/public", express.static("public"));

app.use("/api/customer", customerRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT : ${process.env.PORT}`);
});
