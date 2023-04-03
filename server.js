const express = require('express')
const app=express()
const port =5000
const mongoose = require("mongoose");
const auth = require('./routers/authRouter')
const posts =require('./routers/postsRouter')
const validateToken=require('./middleware/validateToken')
const errorHandler = require('./middleware/errorHandlers');
mongoose.connect('mongodb://localhost:27017/fyp',{      useNewUrlParser: true, 
family: 4,
useUnifiedTopology: true
}).then(()=>{
    {
        console.log('connected with server')
        }
}).catch((err)=>{
    console.log(err)
})
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/' , auth)
app.use('/',validateToken , posts)
app.use(errorHandler)
app.listen(port , ()=>{
    console.log('listenigng on prot' , port);
})

