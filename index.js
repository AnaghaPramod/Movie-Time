//import express
const express = require('express');

//import cors
const cors = require('cors');

//import dataservices
const dataservices = require('./services/dataServices')

//create an application using express
const app = express();

//use json parser for server responses
app.use(express.json())

//using cors specify the origin to the server
app.use(cors({
    origin:'http://localhost:4200'
}))

//setup a port  number
app.listen(3000,()=>{
    console.log('listening on port:3000');
})

//API call to get all Movies
app.get('/all-movies',(req,res)=>{
    
    dataservices.getMovies().then(
        result=>{
        
            res.status(result.statusCode).json(result)
        }
    )
})