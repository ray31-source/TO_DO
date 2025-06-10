const Todo = require('../Models/todomodel')
const JWT_SECRET = "gaundmarao"
const jwt = require('jsonwebtoken')

//Here we are facing a problem of getting token

async function createTodo(req,res){
const authHeader = req.headers.authorization || req.cookies
if(!authHeader){
    console.log("token not found")
    res.status(500).send("Invalid User")
}

try{
    const token = authHeader.split('')[1]
    console.log(token)
    const decoded = jwt.verify(token , JWT_SECRET)
    if(! decoded._id){
        console.log("Id was not found")
        res.status(500).send("Invalid User")
    }
    else{
        const {tittle , description , body } = req.body
      
        if(!tittle || !body){
            console.log('Tittle and Body is empty')

        }
        else{
            const todo = new Todo({
                tittle,
                description,
                body
            })
            await todo.save()
            .then(()=>{
                console.log("Todo saved succesfully"

                )
            })
        }
            
                      
        } 
    }
    catch (error) {
        console.log(error)
        res.status(400).send("There was a server side error")
    }

}
module.exports = createTodo;