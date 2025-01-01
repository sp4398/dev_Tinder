const express = require("express");
const connect = require("./config/database");

const app = express();

connect()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(7777, () => {
      console.log("server is running on 7777...");
    });
  })
  .catch((err) => {
    console.error("Database connection failed");
  });
