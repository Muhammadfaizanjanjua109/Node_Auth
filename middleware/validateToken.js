
const jsonwebtoken =require('jsonwebtoken')
const validater=async(req,res,next)=>{
 const token= req.headers.authorization.split(' ')

 const user=await  jsonwebtoken.verify(token[1],'faizan1000' ,(err,decoded)=>{
    if (decoded) {
        console.log(decoded);
   return decoded
        
    }
    else{
      res.send('can not validate user')
      console.log(err)
    }
 })
 if(user)
 {
    req.auth=user
    next()
 }

}
module.exports=validater