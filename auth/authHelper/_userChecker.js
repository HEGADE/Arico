const {User} =require("../../db/schema")
const _userChecker= async(username)=>{
 
let user=await User.findOne({userName:username})

if(!!user) {
    return user}
return false
}
module.exports=_userChecker