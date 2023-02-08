//import mongoose
const mongoose = require('mongoose');

//define the conection string
mongoose.connect('mongodb://localhost:27017/MovieTime',()=>{
    console.log('Connected to Mongodb');
})

//create a model for the movies
const Movie = mongoose.model('Movie',{
    //schema creation
    title:String,
    year:Number,
    duration:String,
    poster:String
})

module.exports={
    Movie
}