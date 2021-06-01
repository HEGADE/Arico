const jwt=require("jsonwebtoken")
const _tokenCreator=async(username)=>{
   const token=await jwt.sign({username},process.env.SEC_KEY,{
       expiresIn:"10h"
   })
   return token

}
module.exports=_tokenCreator