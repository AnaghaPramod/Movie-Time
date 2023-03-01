import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  allmovies:any=[];
  user:any;

  constructor(private api:ApiService, private ds:DataService ){ 
  }

  ngOnInit():void{
    this.api.getallmovies().subscribe(
      (data:any)=>{
        this.allmovies = data.movies;
      }
    )
  }

booknow(movie:any){
   this.api.booknow(movie).subscribe(
    (result:any)=>{
    },
    (result:any)=>{
    }   )
}

addtodetails(movie:any){
this.api.addtodetails(movie).subscribe(
  (result:any)=>{
  },
  (result:any)=>{
  }
)
}

}
