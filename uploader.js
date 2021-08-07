const multer = require("multer")
module.exports=multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./thumbnails/")
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getMilliseconds() + Math.random() + file.originalname)
  }
})