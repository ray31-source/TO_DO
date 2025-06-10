const express = require('express')
const app = express()
const userRouter = require('./Routes/userRoute')
const todoRouter = require('./Routes/todoRoute')

app.use(express.json())
app.use('/user',userRouter)
app.use('/user/:id',todoRouter)


app.get('/',(req,res)=>{
res.send("Hello World")
})
app.use(express.static('public'))

module.exports = app;