const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("./connection");
const Schema = mongoose.Schema
const GuestSuperUser=mongoose.Schema({
  ip:{
    type:Number,
    required:true,

  },
  uniqueId:{
    type:String,
    unique:true,
    required:true
  }
})


const schema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password required"],
  },
  email: {
    type: String,
    unique: [true, "Email already Exits"],
    required: [true, "Email is required"],
  },
  followers: [
    {
      type: String,
      
    },
  ],
  following: [
    {
      type: String,
    },
  ],
  pic:{
    type:String
  }
 
});
const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  article: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  user:{
    type: Schema.Types.String, ref: 'user'
  }
});
schema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  console.log(this.password, "Rrrr");
  next();
});
const User = new mongoose.model("user", schema);
const Article = new mongoose.model("article", ArticleSchema);
module.exports = {Article,User};




// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// require("./connection");
// const ArticleSchema = new mongoose.Schema({
//   title: {
//     type: String,
//   },
//   article: {
//     type: String,
//   },
//   createdDate: {
//     type: Date,
//     default: Date.now(),
//   },
// });
// const schema = new mongoose.Schema({
//   userName: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   name: {
//     type: String,
//   },
//   password: {
//     type: String,
//     required: [true, "Password required"],
//   },
//   email: {
//     type: String,
//     unique: [true, "Email already Exits"],
//     required: [true, "Email is required"],
//   },
//   followers: [
//     {
//       type: String,
      
//     },
//   ],
//   following: [
//     {
//       type: String,
//     },
//   ],
//   articles: [ArticleSchema],
// });
// schema.pre("save", async function (next) {
//   this.password = await bcrypt.hash(this.password, 10);
//   console.log(this.password, "Rrrr");
//   next();
// });
// const Article = mongoose.model("article", schema);
// module.exports = Article;
