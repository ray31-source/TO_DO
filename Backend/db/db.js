const mongoose = require('mongoose')
const uri = "mongodb+srv://rayhantaj517:bCHEywVgkAoHrsiw@cluster0.k8kjera.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


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