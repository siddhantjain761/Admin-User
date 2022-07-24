import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CreateuserService } from '../createuser.service';
import { Createuser } from './createuser';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private router:Router,private createUser:CreateuserService) { }
  registerForm!:FormGroup;
      // firstname!:String;
      // lastname!:String;
      // emailid!:String;
      // mobilenumber!:Number;
      // password!:String;
      // nationality!:String;
      // passportnumber!:String;
      // permanentaddress!:String;
      // officeaddress!:String;
      // personalidentificationnumber!:Number;


      submitted!:boolean;
      createuser:Createuser=new Createuser();

  ngOnInit(): void {
    this.registerForm=this.formbuilder.group({
      Firstname:['',Validators.required],
      Lastname:['',Validators.required],
      Emailid:['',Validators.required],
      Mobilenumber:['',Validators.required],
      Password:['',Validators.required],
      Nationality:['',Validators.required],
      Passportnumber:['',Validators.required],
      Permanentaddress:['',Validators.required],
      Officeaddress:['',Validators.required],
      Personalidentificationnumber:['',Validators.required],
    })
    

  }

  submit(){
    this.submitted=true;
    console.log(this.createuser);
    // this.createUser.addUser(this.createuser).subscribe(
    //   (error)=>{
    //     console.log(error.toString);
      
    //   }
    // );

    this.createUser.getuser().subscribe({
      next:data=>console.log(data)
    }
      
    );
    this.router.navigate(['/user-dashboard']);

  }

}
