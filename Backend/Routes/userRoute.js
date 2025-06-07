const express = require('express')
const registerUser = require('../services/userService')
const loginUser = require('../services/userService')

const userRouter = express.Router()

userRouter.get('/register',(req,res)=>{
    res.send("This is a user register route")
})

userRouter.post('/register',
    registerUser
)
userRouter.post('/login' ,
    loginUser
)

module.exports = userRouter;