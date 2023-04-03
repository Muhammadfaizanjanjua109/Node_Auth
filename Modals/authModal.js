const moongoose=require('mongoose')
const Schema =moongoose.Schema

const AuthSchema =new Schema({
    email:{
        type:String,
        required:[true, "Please Add Email"]
    },
    name:{
        type:String,
        required:[true, "Please Add Name"]
    },
    password:{
        type:String,
        required:[true, "Please Add Password"]
    },
})
module.exports=moongoose.model('Auth', AuthSchema )

