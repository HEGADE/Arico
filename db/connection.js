const mongoose = require("mongoose");
let config = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
};
mongoose
  .connect(process.env.MONGO_CON_URL, config)
  .then((e) => {
    console.log("Database is up and, running");
  })
  .catch((e) => {
    console.log(e);
  });

module.exports = mongoose;
