const {User} = require("../db/schema");
const _userChecker = require("../auth/authHelper/_userChecker");
const _tokenCreator = require("../auth/authHelper/_tokenCreator");

module.exports = async (username, name, password, email) => {
  console.log("here");
  let token = null;
  console.log(username, name, password, email)
  if (await _userChecker(username))
    return { msg: "User already Exits!", status: 200, token };
  token = await _tokenCreator(username);
  try {
    let dataToSave = new User({
      userName: username,
      name,
      password,
      email,
    });
    await dataToSave.save();
  } catch (e) {
    token = null;
    let actualError = e.message.split(":")[2];
    if (e.code == 11000) actualError = "Email already Exits!";

    return { msg: actualError, status: 200, token };
  }
  return { msg: "User Created", status: 201, token };
  
};
