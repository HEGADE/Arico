const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  const token = req.headers["auth"];
  console.log(token);
  if (typeof token == "undefined" || token.trim().length <= 0)
    return res.json({ msg: "Access denied!", code: -1 });
  if (typeof token == "string") {
    try {
      let decode = jwt.verify(token, process.env.SEC_KEY);
      console.log(decode);

      req.user = decode.username;
      console.log(req.user);
      return next();
    } catch {
      res.json({ msg: "Access denied", code: -1 });
    }
  }
};
