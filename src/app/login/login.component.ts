import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router, private ds:DataService, private fb:FormBuilder){

  }
  
  // uid:any;
  // pswd:any;

  id:any;
  pswd:any;
  loginForm=this.fb.group({
    id:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  login(){
    var id = this.id;
    var pswd = this.pswd;
    var userDetails = this.ds.userDetails;
     const result=this.ds.login(id,pswd)
    if(result){
      alert('Login successful')
      this.router.navigateByUrl('movies')
    }else{
      alert('Login failure')
      console.log(this.loginForm.get('id')?.errors);
      
    }
  }
  
    





  // userDetails:any={
  //   1000:{uid:1000,username:"Siya",password:1000},
  //   1001:{uid:1001,username:"Alen",password:1001},
  //   1002:{uid:1002,username:"Aju",password:1002},
  //   1003:{uid:1003,username:"Janvi",password:1003}

  // }



  // login(a:any,p:any){
  //   var uid=a.value;
  //   var pswd=p.value;
  //   var userDetails=this.userDetails

  //   if(uid in userDetails){
  //     if(pswd==userDetails[uid]['password']){
  //       alert('login successful')
  //     }else{
  //       alert('incorrect password')
  //     }
  //   }
  
    
  // }
  
  // uidChange(event:any){
  //   // console.log(event.target.value);
  //   this.uid=event.target.value;
  //   console.log(this.uid);
    
    
  // } 
  // pswdChange(event:any){
  //   // console.log(event.target.value);
  //   this.pswd=event.target.value;
  //   console.log(this.pswd);
    
    
  // }
  
  
}
