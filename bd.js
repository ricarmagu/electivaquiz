const mongoose = require ('mongoose')
const pelicula Schema = mongoose.Schema({
    course_name:{
        type:String,
        require: true,
        Unique: true
    }
})
module.exports = mongoose.model()