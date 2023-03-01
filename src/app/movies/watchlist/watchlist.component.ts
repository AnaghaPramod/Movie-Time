import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home1',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatclistComponent {
  watchlist:any;
  seatcount:number=0;
  total=0;
  price=150;
  

constructor(private api:ApiService, private router:Router){}
    
    ngOnInit():void{
      this.api.getwatchlist().subscribe(
        (data:any)=>{
          this.watchlist=data.movies 
        }
      )
    }
   
    remove(movie:any){
      this.api.remove(movie.id).subscribe(
        (result:any)=>{

        },
        (result:any)=>{
        
        }
      )
    }
  



    buttons = Array(60).fill(null).map((_, index) => { return { value: index + 1, clicks: 0 }; });
   selectedButton: any;
  handleClick(button:any) {
    button.clicks++;
    this.selectedButton = button;
    this.seatcount = this.buttons.filter(button => button.clicks > 0).length;
    this.total=this.seatcount*this.price
    // let total=this.getamount
    // console.log(total);
    
    //  this.seatarray.push(this.selectedButton)
    //  this.seatlist.next(this.seatarray)
    //  console.log(this.seatlist);
     
  }

  // getamount(){
  //  let total=0;
  //   this.buttons.map((item:any)=>{
  //     total+=this.seatcount*110
  //   })
  //    return total
  // }
  proceed(){
    alert('Ticket booked successfully')
    this.router.navigateByUrl('/movies')
  }
}
