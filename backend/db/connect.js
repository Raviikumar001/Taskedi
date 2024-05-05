const mongoose = require("mongoose");

const connectDb = (url) => {
  return mongoose.connect(url, {
    dbName: "Taskedi",
  });
};

module.exports = connectDb;
