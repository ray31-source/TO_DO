const http = require('http')
const dbConnect = require('./db/db')
const app = require('./app')
const server = http.createServer(app)
const port = 8000


server.listen(port , ()=>{
    console.log("The server is running")
    dbConnect()
})












