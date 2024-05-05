const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDb = require("./db/connect");
const authRoutes = require("./routes/auth-routes");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PATCH,DELETE",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/v1/auth", authRoutes);

app.use("/", () => {
  res.send("Welcome to Taskedi");
});

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`*** 🐄 Server is running on port ${port} 🐄 🔥 ***`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
