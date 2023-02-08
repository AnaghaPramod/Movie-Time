import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any;

 


  userDetails:any={
    1000:{id:1000,username:"Siya",password:1000},
    1001:{id:1001,username:"Alen",password:1001},
    1002:{id:1002,username:"Aju",password:1002},
    1003:{id:1003,username:"Janvi",password:1003}

  }

  constructor() { }

  register(id:any,username:any,password:any){
    var userDetails=this.userDetails
    if(id in this.userDetails){
      return false;
    }else{
      userDetails[id]={
        id:id,
        username:username,
        password:password}
        return true;
      }
    }

    login(id:any,pswd:any){
     var userDetails=this.userDetails;
     if(id in this.userDetails){
      if(pswd==this.userDetails[id]['password']){
        this.currentUser=this.userDetails[id]['username']
        return true;
      }else{
        alert('invalid password')
        return false;
      }
     }else{
      alert('invalid user details')
      return false;
     }
    }
  
}
