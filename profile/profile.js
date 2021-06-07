const { User, Article } = require("../db/schema");

class ProfileHandler {
  async showProfile(req, res) {
    let followers, following, userName, name, articleCount;
    const userData = await User.findOne({ userName: req.user });
    articleCount = await Article.countDocuments({ user: req.user }).exec();
    following = userData.following.length;
    followers = userData.followers.length;
    name = userData.name;
    userName = userData.userName;
    res.json({ followers, name, following, userName, articleCount });
  }
  async update(req, res) {
    console.log(req.file);
    if (req.body.name?.length < 4)
      return res
        .status(406)
        .json({ msg: "Unable to update! Name should be 4 character long" });

    try {
      const updated = await User.updateOne(
        { userName: req.user },
        {
          $set: { name: req.body.name || "Hacker dude" },
          pic: `static/${req.file.filename}`,
        }
      );
      console.log(updated);
      return res.json({ msg: "Updated successfully!" });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: "Unable to update!" });
    }
  }
  async showProfileUser(req, res) {
    let followers, following, name, articleCount;
    const userData = await User.findOne({ _id: req.params.id });
    following = userData.following.length;
    followers = userData.followers.length;
    name = userData.name;
    res.json({ followers, name, following });
  }
}

module.exports = new ProfileHandler();
