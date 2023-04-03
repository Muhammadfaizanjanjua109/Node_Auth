
////read
const Post =require('../Modals/postModal')
const getPost=async(req,res)=>{
try {
    const a=await Post.find()
res.status(200).send(a)
} catch (error) {
    console.log(error);
}

}


//create
const createPost=async(req,res)=>{
 try {
    // console.log(req.body);
    const {name,address,phone}=req.body
    const auth=req.auth
    console.log(name ,auth.id)

    let b=await Post.create({
        name,address,phone
    })

    res.send(b)
    //  res.status(200).send("Post added successfully" ,b.errors)
    //  console.log("body: %j" ,b.error)
 } catch (error) {
    console.log(error)
 }
}
  

    
//Update
const updatePost=async(req,res)=>{
    
try {
let a=await Post.findById(c)
if(!a)
{
    res.status(402).send('no record with such id exist')

}

    let b= await Post.findByIdAndUpdate(req.params.id,
    req.body
    )

 

    res.status(200).send({messege:`Post updated Successfully` , b})



    
} catch (error) {
    res.send(401,"Id not found" )
    throw new Error(error)
}
}

   
//Delete
const deletePost=(req,res)=>{
    res.status(200).send({messege:`Post Deleted Successfully ${req.params.id}`})
}
    
    

module.exports={
    getPost,createPost,updatePost,deletePost

}
    
    