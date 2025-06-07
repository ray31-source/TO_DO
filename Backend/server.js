const http = require('http')
const app = require('./app')
const server = http.createServer()
const port = 3000

server.listen(port , ()=>{
    console.log("The server is running")
})












