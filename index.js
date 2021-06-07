require("dotenv").config();
const express = require("express");
const route = require("./api/routes/mainRoute");
const app = express();

let port = process.env.PORT || 8000;

// Express middleware..>
app.use(express.json());

// Main api route..>
app.use("/api", route);
app.get("/",(req,res)=>{
  res.send("home page")
})

// For invalid routes..>
// app.get("/*", (req, res) => {
  //   res.status(404).json({ msg: "Page not found.. 😒" });
  // });
  app.use("/static",express.static(__dirname+"\\uploads"))

app.listen(
  8000,
  console.log("Running at 🚀🚀🚀  " + "http://localhost:" + port,__dirname)
);
