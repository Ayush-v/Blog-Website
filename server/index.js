const path = require("path");
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

const blogRoutes = require("./routes/blogRoutes");
const app = express();

const PORT = process.env.PORT || 5000;

// connect to mongodb
const dbURL = process.env.DB_URL;

mongoose
  .connect(dbURL)
  .then((result) => {
    app.listen(PORT, () => console.log(`server running on ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// gets all the blogs
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(blogRoutes);

app.use((req, res) => {
  res.status(404);
});
