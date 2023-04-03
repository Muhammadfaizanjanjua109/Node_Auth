

const express = require('express')
const { Signup, Login } = require('../Controllers/authController')

const auth = express.Router()



auth.route('/SignUp').post(Signup)
auth.route('/Login').post(Login)

module.exports=auth