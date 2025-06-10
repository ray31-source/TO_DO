const mongoose = require('mongoose')
const TodoSchema = mongoose.Schema({
tittle:{
    type:String,
    required:true
},
description:{
    type:String
},
body:{
    type:String
    
}


})
const Todo = mongoose.model('Todo' , TodoSchema)
module.exports = Todo