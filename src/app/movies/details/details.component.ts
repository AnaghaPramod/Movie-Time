import { Component } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  detail:any=[]

constructor(private api:ApiService){}
ngOnInit():void{
  this.api.getdetail().subscribe(
    (data:any)=>{
      this.detail=data.movies
      // this.detail=this.sanitizer.bypassSecurityTrustResourceUrl(data.movies)
    }
  )}

  back(movie:any){
    this.api.back(movie.id).subscribe(
      (result:any)=>{
      },
      (result:any)=>{
      }
    )
  }
}
