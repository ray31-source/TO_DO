const express = require('express')
const app = express()
const userRouter = require('./Routes/userRoute')

app.use(express.json())
app.use('/user',userRouter)

app.get('/',(req,res)=>{
res.send("Hello World")
})

module.exports = app;