const mongoose = require ('mongoose')
const pelicula Schema = mongoose.Schema({
    pelicula:{
        movie_name:String,
        season: Number,
        autors: Array
    }
    
})
module.exports = mongoose.model()