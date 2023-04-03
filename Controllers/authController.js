
const Auth = require('../Modals/authModal')
const bcrypt =require('bcrypt')
const jsonwebtoken = require('jsonwebtoken');
const Signup=async(req,res)=>{
try {
   const {name,email,password}= req.body

   ////Check if all fields are comming in request
   if(!email || !name || !password)
 {
    res.status(406).send('All fields are required')
    return
          }
  ////Check if email exist of not
   const emailExist=await Auth.findOne({email})
   if(emailExist)
{
    res.status(406).send('Email already exist')
    return
}


  ////Encrypt password to hash
const bypass= await bcrypt.hash(password,10)


  ////Add user record to DB
 await Auth.create({name,email,password:bypass})
 res.status(201).send('user added Succesfully')

}
 catch (error)
{
    console.log(error,"Error")  }
}



const Login=async(req,res)=>{
// req.headers.x-api-key
    try {
        const {email,password} =req.body;
        if(!email || !password) {
            res.send('All Fields are required').status(401)
            return
        }

        const emailExist=await Auth.find({email})
        if(!emailExist) {
            res.send('Invalid Email').status('406')
            return
        }
        const reqPass=emailExist[0].password
        const match = await bcrypt.compare(password,reqPass)
       if(match)
       {
        let cred={email:emailExist[0].email ,name:emailExist[0].name ,id:emailExist[0].id} 
      const token=  jsonwebtoken.sign(cred,'faizan1000' )
        res.json(
          {  token:token, email:emailExist[0].email ,name:emailExist[0].name }
        ).status('201')
       }
        

    } catch (error) {
        
    }
    }

module.exports={Signup,Login}