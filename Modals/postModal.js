const mongoose=require('mongoose')
const Schema= mongoose.Schema

const postSchema=new Schema({
    name:{
        type:String,
        required:[true, "Please Add Name"]
    },
    address:{
        type:String,
        required:[true, "Please Add Address"]
    },
    phone:{
        type: String,
        required:[true, "Please Add Phone"],
        // integer: true,
        // min:[9,"Too few Numbers"],
        // max:[14,'more numbers']
    },
  
},
{
    timestamps:true,
   }
)


module.exports=mongoose.model('Post',postSchema)