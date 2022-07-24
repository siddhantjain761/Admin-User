import { Component, OnInit,AfterContentInit } from '@angular/core';
import { FormBuilder,Validator,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterContentInit {

  constructor(private formBuilder:FormBuilder,private router:Router) { }
  ngAfterContentInit(): void {

  }
  login!:FormGroup;

  ngOnInit(): void {
    this.login=this.formBuilder.group({
      UserName:['',Validators.required],
      Password:['',Validators.required]
    })



  }
  isAuthenticated!:boolean;
  submitted=false;
  username!:string;
  password!:string;
  url!:boolean;
  //bookride:string='["/book-ride"]';
  //logins:string='["/login"]';
  submit(username:string,password:string){
    this.submitted=true;
    this.username=username;
    if( username==='admin' &&  password==="admin"){
      this.isAuthenticated=true;
      //this.loginservice.loginAuthenticate();
      this.router.navigate(['/user-dashboard']);
    }else{
      this.isAuthenticated=false;


    }


  }


}
