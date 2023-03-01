import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getallmovies(){
    return this.http.get('http://localhost:3000/all-movies')
  }

//book now
booknow(movie:any){
  const body={
    id:movie.id,
    title:movie.Title,
    year:movie.Year,
    runtime:movie.Runtime,
    poster:movie.Poster
  }
   return this.http.post('http://localhost:3000/booknow', body)
}

getwatchlist(){
  return this.http.get('http://localhost:3000/getwatchlist')
}

//remove from watchlist
remove(id:any){
  return this.http.delete('http://localhost:3000/remove/'+id)
}


//add to details
addtodetails(movie:any){
  const body={
    id:movie.id,
    title:movie.Title,
    description:movie.Description,
    trailer:movie.Trailer,
    director:movie.Director,
    poster:movie.Poster
  }
  return this.http.post('http://localhost:3000/addtodetails',body)
}

getdetail(){
  return this.http.get('http://localhost:3000/getdetail')
}

// delete from addtodetail
back(id:any){
   return this.http.delete('http://localhost:3000/back/'+id)
}
}
