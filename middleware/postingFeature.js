// Need to solve security issue
const {Article} =require("../db/schema")

const postArticle = async(req, res, next) => {
  let username=req.user
  const { title, article } = req.body;
  try{

    let stat= Article({title,article,user:req.user})
    await stat.save()
  } 
  catch(e){
    console.log(e);
  }
  
  next()

  

  
};
module.exports=postArticle
