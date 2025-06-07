const User = require('../Models/usermodels')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "gaundmarao"
async function registerUser(req,res){
const {name,email,password} = req.body
if(! name || ! email || ! password){
     console.log("Fields are Empty" , req.body)
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
    
    
}
catch (err){
    console.log("Failed to register",err)
    res.status(500).send("There was a server side error")
    
}
}


}
async function loginUser(req,res){
    const { email , password} = req.body

    const user = await User.findOne({email})
    if(!user){
        res.status(401).send("Invalid email or password")
    }
    else{
        const isMatch =  await bcrypt.compare(password , user.password)
        if(!isMatch){
        res.status(401).send("Invalid email or password")
            
        }
        else{
            const token = jwt.sign({_id:user._id},JWT_SECRET,{
                expiresIn:'1h'
            })
            console.log("Login Successful",token)
            res.status(200).send('Successfully Logged In')

            
        }
    }
  
}

module.exports = registerUser;
module.exports = loginUser;
