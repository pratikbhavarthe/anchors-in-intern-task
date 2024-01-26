const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGODB_URL;
app.use(cors());

// Connecting to MongoDB Database
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log(`Connected to ${mongoUrl}`);
  })
  .catch((err) => {
    console.log(err);
  });

// Defining the API routes
app.get("/", (req, res) => {
  res.send("Hello anchors.in!");
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
