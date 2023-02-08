import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getallmovies(){
    return this.http.get('http://localhost:3000/all-movies')
  }

  // //add seats
  // addseat(seat:any){
  //   const body={
  //   }
  //   this.http.post('http://localhost:3000/home',body)
  // }
}
