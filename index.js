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

// API call to booknow   (/home1)
app.post('/booknow',(req,res)=>{
    dataservices.booknow(req.body.title,req.body.year,req.body.runtime,req.body.poster).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
    
})


//API call to get watchlist
app.get('/getWatchlist',(req,res)=>{
    
    dataservices.getwatchlist().then(
        result=>{
        
            res.status(result.statusCode).json(result)
        }
    )
})


//API call to remove
app.delete('/remove/:id',(req,res)=>{
    
    dataservices.remove(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// API call to addtodetails   (/home1)
app.post('/addtodetails',(req,res)=>{
    dataservices.addtodetails(req.body.title,req.body.trailer,req.body.description,req.body.director,req.body.poster).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
    
})

//API call to get detail
app.get('/getdetail',(req,res)=>{
    
    dataservices.getdetail().then(
        result=>{
        
            res.status(result.statusCode).json(result)
        }
    )
})


//API call to remove
app.delete('/back/:id',(req,res)=>{
    
    dataservices.back(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// app.get('/api/buttons', (req, res) => {
//     res.json(Array(75).fill(null).map((_, index) => index + 1));
//   });




