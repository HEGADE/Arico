const reqValidator = (req, res, next) => {

  if (
    req.body.username?.trim().length < 4 ||
    req.body.password?.trim().length < 4 ||
    req.body.email?.trim().length < 4
  )
    return res
      .status(406)
      .json({ msg: "Password and username must be 4 character long" });
    return next()
};
const reqValidatorLogin=(req,res,next)=>{
  if (
    req.body.username?.trim().length < 4 ||
    req.body.password?.trim().length < 4 

  )
    return res
      .status(200)
      .json({ msg: "Password and username must be 5 character long" });
    return next()
}
module.exports={
  reqValidator,
  reqValidatorLogin
}