const User = require('../Models/usermodels')
const bcrypt = require('bcrypt')
async function registerUser(req,res,next){
const {name,email,password} = req.body
if(!name || !email || !password){
     console.log("Fields are Empty")
    throw new Error("All fields are required")
   
    
}
else{
    try{
    const user = new User({
        name,
        email,
        password
    })

    user.password = await bcrypt.hash(password , 10)
    user.save()
    .then(()=>{
        console.log("Successfully Saved")
        res.status(200).send("Registered Successfully")
    })
    next()
}
catch (err){
    console.log("Failed to register",err)
    res.status(500).send("There was a server side error")
    
}
}

}
module.exports = registerUser;
