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
    runtime:String,
    poster:String
})

//create a model for booknow
const Watchlist = mongoose.model('watchlist',{
    title:String,
    year:Number,
    runtime:String,
    poster:String
})

//create a model for addtodetails
const Detail = mongoose.model('Detail',{
    title:String,
    trailer:String,
    description:String,
    director:String,
    poster:String
})


module.exports={
    Movie,
    Watchlist,
    Detail
}