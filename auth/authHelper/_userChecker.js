const {User} =require("../../db/schema")
const _userChecker= async(username)=>{
 
let user=await User.findOne({userName:username})

if(!!user) {
    if(user?.isSuper===true){
        user={...user,isSuper:true}
    }
    return user}
return false
}
module.exports=_userChecker