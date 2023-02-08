//import db
const db = require('./db')

//get all movies details from db
const getMovies = ()=>{
    return db.Movie.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    movies:result
                }
            }else{
                return{
                    status:false,
                    statusCode:402,
                    message:'Not available'
                }
            }
        }
    )
 }

 module.exports={
    getMovies
 }