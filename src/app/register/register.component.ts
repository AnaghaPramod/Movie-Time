import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  id:any;
  uname:any;
  pswd:any;
 
 
 
   constructor(private ds:DataService, private router:Router, private fb:FormBuilder){ }
   ngOnInit(): void{
 
   }
 
   registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    id:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
register(){

  var id=this.id;
  var uname=this.uname;
  var pswd=this.pswd
  var userDetails=this.ds.userDetails;

  const result= this.ds.register(id,uname,pswd)

  if(result){
    alert('Register succesful');
    this.router.navigateByUrl('')
  }else{
    alert('register failure');
    console.log(this.registerForm.get('id')?.errors);

  }
}

 
}
