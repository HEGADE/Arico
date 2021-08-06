require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const route = require("./api/routes/mainRoute");
const app = express();

let port = process.env.PORT || 8000;

// Express middleware..>
app.use(express.json());
app.use(cors());

//Additional layer of security using Helmet
app.use(helmet());

// Main api route..>
app.use("/api", route);

// For documentation of article api goes here
app.get("/", (req, res) => {
  res.send("home page");
});

app.use("/static", express.static(__dirname + "\\uploads"));

app.listen(
  8000,
  console.log("Running at 🚀🚀🚀  " + "http://localhost:" + port, __dirname)
);
