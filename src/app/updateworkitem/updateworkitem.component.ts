import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateworkitem',
  templateUrl: './updateworkitem.component.html',
  styleUrls: ['./updateworkitem.component.css']
})
export class UpdateworkitemComponent implements OnInit {

  selectedLocation!:string;
  shippingDate!:Date;
  constructor(private formBuilder:FormBuilder,private router:Router) { }
  updateworkitem!:FormGroup;
  ngOnInit(): void {
    this.updateworkitem=this.formBuilder.group({
      Selectedlocation:['',Validators.required],
      Shippingdate:['',Validators.required],
      
      })
  }

}
