const express= require("express")
const { default: mongoose } = require("mongoose")

const quiz_electiva = "electiva1"

const uri = `mongodb+srv://${quiz_electiva}:${password}@cluster0.fuxj0gd.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
const DB_NAME = "practice1"
const password = "electiva1"
const app=express()
const port = 3000
mongoose.connect(uri)
.then(console.log('date base connected'))
.catch((error)=>console.log(error))
app.listen(port, ()=>{console.log('Conect with the port', port)})
