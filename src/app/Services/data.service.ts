import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDetails:any={
    1000:{uid:1000,username:"Sreya",password:1000,age:23,email:"sreya@gmail.com",no:1234567890},
    1001:{uid:1001,username:"Ann",password:1001,age:23,email:"ann@gmail.com",no:1234567890},
    1002:{uid:1002,username:"Mili",password:1002,age:23,email:"mili@gmail.com",no:1234567890}
  }
  currentUser: any;
  currentUid: any;
  
  register(uid:any, username:any, password:any){
    var userDetails=this.userDetails;
    if(uid in this.userDetails){
      return
    }else{
      userDetails[uid]={
        uid:uid,
        username:username,
        password:password
        // age:age,
        // no:no,
        // email:email 
      }
      return true;
    }
  }


  login(uid:any, pswd:any){
    var userDetails=this.userDetails;
    if(uid in this.userDetails){
      if(pswd==this.userDetails[uid]['password']){
        this.currentUser=userDetails[uid]['username'];
        this.currentUid=uid
        return true;
      }else{
      alert('invalid password')
      return false;
    }
  }
    else{
      alert('invalid userdetails')
      return false
    }
  }

  
}
