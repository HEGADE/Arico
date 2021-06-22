const { Article } = require("../../db/schema");
const showArticle = async (req, res, next) => {
  let Limit = 6;
  let page = parseInt(req.query?.page);
  let searchQuery = req.query?.search;

  let startIndex = (page - 1) * 6;
  let article = null;
  let searchAble = {};

  try {
    article = await Article.aggregate([
      {
        $project: {
          title: 1,
          user: 1,
          article: { $substr: ["$article", 0, 120] },
        },
      },
    ])

      .skip(startIndex || 0)
      .limit(Limit)
      .sort("createdDate")
      .exec();
  } catch (e) {
    return res.json({ msg: "Some Error occurred" });
  }
  res.json(article);
};


const readMoreArticle = async (req, res) => {
  let articleId = req.params.id;
  let articles = null;
  try {
    articles = await Article.findOne({ _id: articleId });
  } catch (e) {
    res.status(500).json(articles);
  }
  if (!articles)
    return res
      .status(404)
      .json({ msg: "Article not Found,not to worry ,publish one 😊" });

  res.json(articles);
};

module.exports = {
  showArticle,
  readMoreArticle,
};
