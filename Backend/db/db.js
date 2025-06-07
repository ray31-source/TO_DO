const mongoose = require('mongoose')
const uri = ""

function dbConnect(){
mongoose.connect(uri)
.then(()=>{
    console.log("Connection Successful")
})
.catch(()=>{
console.log("Connection Failed")
})
}

module.exports = dbConnect;