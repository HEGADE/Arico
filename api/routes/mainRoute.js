const route = require("express").Router();
const postingFeature = require("../../middleware/postingFeature");
const { reqValidator, reqValidatorLogin } = require("../../middleware/reqValidator");
const { showArticle, readMoreArticle } = require("../../middleware/article/article")
const auth = require("../../auth/auth");
const userCreation = require("../../util/userCreation");
const login = require("../../util/login");
const profile = require("../../profile/profile")
const rateLimit = require("express-rate-limit")
const multer = require("multer")
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/")
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getMilliseconds() + Math.random() + file.originalname)
  }
})
const upload = multer({ storage: storage })

const msg = {
  msg: "too many request"
}
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  message: msg,
  max: 5,

})
// Routes for displaying articles..>
route.get("/", auth, showArticle, (req, res) => {
  res.json({ msg: "Your Articles 🤞✌" });
});

//Route for profile of article creator..>
route.get("/userProfile/:id", auth, profile.showProfileUser, (req, res) => {
  res.json({ msg: "Your Articles 🤞✌" });
});

// Route for posting (creating) article..>
route.put("/", auth, postingFeature, (req, res) => {

  res.json({ msg: "Your Articles pushed 🤞✌" });
});

// Route for user login..>
route.post("/login", limiter, reqValidatorLogin, login, (req, res) => {
  res.status(req.code).json({ msg: req.msg, token: req.token || null });
});


//Route for user creation..>
route.post("/signup", limiter, reqValidator, async (req, res) => {
  let { username, name, password, email } = req.body;
  try {
    let { msg, status, token } = await userCreation(
      username,
      name,
      password,
      email
    );
    res.status(status).json({ msg, token });
  } catch (e) {
    console.log(e.name);
    res
      .status(400)
      .json({ msg: "password and username must be 4 character long" });
  }
});

//Route for user Profile..>
route.get("/profile", auth, profile.showProfile)

// Route for profile update..>
route.put("/profile", auth, upload.single("pic"), profile.update)

// Route for viewing article based on id
route.get("/article/:id", readMoreArticle)

route.get("/isauthenticated", auth,(req,res)=>{
  res.json({ha:"ha"})
})

module.exports = route;
