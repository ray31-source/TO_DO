const express = require('express')
const createTodo = require('../services/todoservice')
const todoRouter = express.Router()
todoRouter.get('/todo' ,(req,res)=>{
    res.send("It is a todo Route")
})

todoRouter.post('/todo' ,
    createTodo )



module.exports = todoRouter

