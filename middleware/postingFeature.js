const { Article } = require("../db/schema");
const getColors = require("get-image-colors");
const path = require("path");

let randomColor = Math.floor(Math.random() * (4 - 0 + 1)) + 0;

const postArticle = async (req, res, next) => {
  let username = req.user;
  let colors = await getColors(
    path.join("", `thumbnails/${req.file.filename}`)
  );
  let actualColor = colors.map((color) => color.hex());
  let color = actualColor[randomColor];
  const { title, article } = req.body;
  try {
    let stat = Article({
      title,
      article,
      user: req.user,
      pic: `thumbnail/${req.file.filename}`,
      color: color,
    });
    let data = await stat.save();
    console.log("received some data");
  } catch (e) {
    console.log(e);
  }

  next();
};
module.exports = postArticle;
