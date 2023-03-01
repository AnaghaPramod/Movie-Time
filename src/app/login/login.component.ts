import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
uid:any;
pswd:any;
  constructor(private router:Router, private ds:DataService, private fb:FormBuilder){

  }
  
loginForm=this.fb.group({
    uid:['',[Validators.required, Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]


   })
    


  login(){

    var uid=this.loginForm.value.uid
    var pswd=this.loginForm.value.pswd
    var userDetails=this.ds.userDetails
  
    const result=this.ds.login(uid,pswd)
    if(this.loginForm.valid){
      if(result){
        alert('login successful')
        this.router.navigateByUrl('movies')
      }else{
        alert('login failure')
      // console.log(this.loginForm.get('uname')?.errors);

      }
    }
    }
    




}
