const { Article } = require("../../db/schema");
const showArticle = async (req, res, next) => {
  let Limit = parseInt(req.query?.limit);
  let page = parseInt(req.query?.page);
  let searchQuery = req.query?.search;

  let startIndex = (page - 1) * Limit;
  let article = null;
  let searchAble={}



  try {
    article = await Article.aggregate([
      {
        $project:{
          article:{$substr:["$article",0,120]}
        }
      }
      
    ])
      .limit(Limit || 6)
      .skip(startIndex || 0)
      .sort("createdDate");
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
