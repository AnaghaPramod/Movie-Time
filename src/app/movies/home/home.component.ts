import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AllMoviesComponent } from '../all-movies/all-movies.component';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent {
  seatcount:number=0;
  constructor(private api:ApiService, private http:HttpClient) {}


  // seatarray:any=[];
  // seatlist=new BehaviorSubject([]);


 

  ngOnInit():void{
//     this.selectedButton.subscribe(
//     (data:any)=>{
//     this.seatcount=data.length
// }
//     )
  }

  buttons = Array(60).fill(null).map((_, index) => { return { value: index + 1, clicks: 0 }; });
   selectedButton: any;
  handleClick(button:any) {
    button.clicks++;
    this.selectedButton = button;
    this.seatcount = this.buttons.filter(button => button.clicks > 0).length;
    //  this.seatarray.push(this.selectedButton)
    //  this.seatlist.next(this.seatarray)
    //  console.log(this.seatlist);
     
  }
  
}
 



