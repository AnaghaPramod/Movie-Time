import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
   
 
 
   constructor(private router:Router, private ds:DataService, private fb:FormBuilder){ }
   ngOnInit(): void{ }

   registerForm=this.fb.group({
    uname:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],
    uid:['',[Validators.required, Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]


   })
 uid:any;
 uname:any;
 pswd:any;
//  email:any;
//  no:any;
//  age:any;
 
register(){
  var uname=this.registerForm.value.uname;
  var uid=this.registerForm.value.uid;
  var pswd=this.registerForm.value.pswd;
  // var age=this.age;
  // var no=this.no;
  // var email=this.email;
  var userDetails=this.ds.userDetails;

  const result=this.ds.register(uid,uname,pswd)
  if(this.registerForm.valid){ 
    if(result){
      alert('Register successful')
      this.router.navigateByUrl('')
    }else{
      alert('Register failure')
      console.log(this.registerForm.get('uname')?.errors);
    }
  }
}
}