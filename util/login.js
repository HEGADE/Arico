const { User: Article } = require("../db/schema");
const bcrypt = require("bcryptjs");
const _tokenCreator = require("../auth/authHelper/_tokenCreator");
const _userChecker = require("../auth/authHelper/_userChecker");
module.exports = async (req, res, next) => {
  user = await _userChecker(req.body.username);
  if (!!user) {
    let userPassword = user.password;
    let passwordMatch = await bcrypt.compare(req.body.password, userPassword);
    if (passwordMatch) {
      token = await _tokenCreator(user.userName);
      console.log(req.body.username);

      req.token = token;
      req.msg = "loggedIn";
      req.code = 200;
      return next();
    } else {
      req.msg = "invalid credentials";
      req.code = 200;
      console.log("invalid credentials");
      return next();
    }
  } else {
    req.msg = "invalid credentials";
    req.code = 200;

    console.log("Invalid credentials");
    return next();
  }
};
