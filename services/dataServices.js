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
//booknow details store to db 
const booknow = (title,year,runtime,poster)=>{
            return db.Watchlist.findOne({title}).then(
                (result)=>{
                    if(result){
                        return{
                            status:false,
                            statusCode:401,
                        }
                    }else{
                        const newMovie = new db.Watchlist({
                            year,title,runtime,poster
                        })
                        newMovie.save()
                        return{
                            status:true,
                            statusCode:200,
                        }
                    }
                }
            )
    }

// get watchlist movies from db 
const getwatchlist=()=>{
    return db.Watchlist.find().then(
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
                    message:'Watchlist is empty'
                }
            }
        }
    )
}
// remove movie from db 
const remove=(id)=>{
    return db.Watchlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message: 'movie removed successfully'  
                }
            }else{

               return{
                status:false,
                statusCode:402,
                message:'Watchlist is empty'
               }
            }
        }
    )
}

//addtodetails store to db 
const addtodetails = (title,trailer,description,director,poster)=>{
    return db.Detail.findOne({title}).then(
        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:401
                }
            }else{
                const newDetail = new db.Detail({
                    title,trailer,description,director,poster
                })
                newDetail.save()
                return{
                    status:true,
                    statusCode:200
                }
            }
        }
    )
}
// get detail movies from db 
const getdetail=()=>{
    return db.Detail.find().then(
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
                    message:'Detail is empty'
                }
            }
        }
    )
}

// remove movie detail from db 
const back=(id)=>{
    return db.Detail.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200  
                }
            }else{

               return{
                status:false,
                statusCode:402
               }
            }
        }
    )
}
 module.exports={
    getMovies,
    booknow,
    getwatchlist,
    remove,
    addtodetails,
    getdetail,
    back
 }