import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router) { }
  ngAfterContentInit(): void {
   
  }
  
  update!:FormGroup;



  ngOnInit(): void {
    this.update=this.formBuilder.group({
      
      Mobilenumber:['',Validators.required],
      
      Permanentaddress:['',Validators.required],
      Officeaddress:['',Validators.required]
      })
  }
  mobileNumber!:number;
  permanentAddress!:string;
  officeAddress!:string;

  submit(mobileNumber:number,permanentAddress:string,officeAddress:string):void{
    this.mobileNumber = mobileNumber;
    this.permanentAddress = permanentAddress;
    this.officeAddress = officeAddress;
    return;
  }
}
