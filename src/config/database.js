const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://sauravpandeypoly:saurav@cluster0.6mwxl.mongodb.net/devTinder"
  );
};

module.exports = connect;
