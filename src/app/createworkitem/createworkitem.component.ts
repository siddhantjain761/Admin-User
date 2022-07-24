import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createworkitem',
  templateUrl: './createworkitem.component.html',
  styleUrls: ['./createworkitem.component.css']
})
export class CreateworkitemComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router) { }
  create!:FormGroup;
  ngOnInit(): void {
    this.create=this.formBuilder.group({
      
      Itemname:['',Validators.required],
      
      Itemtype:['',Validators.required],
      Quantity:['',Validators.required],
      From:['',Validators.required],
      To:['',Validators.required],
      Originlocation:['',Validators.required],
      Selectedlocation:['',Validators.required],
      Shippingdate:['',Validators.required],
      Amount:['',Validators.required]
      })
  }

  itemName!:string;
  itemType!:string;
  quantity!:number;
  from!:string;
  to!:string;
  originLocation!:string;
  selectedLocation!:string;
  shippingDate!:Date;
  amount!:number;

  submit(itemName:string,itemType:string,quantity:number,from:string,to:string,originLocation:string,selectedLocation:string,shippingDate:Date,amount:number):void{

    this.itemName = itemName;
    this.itemType = itemType;
    this.quantity = quantity;
    this.from = from;
    this.to = to;
    this.originLocation = originLocation;
    this.selectedLocation = selectedLocation;
    this.shippingDate = shippingDate;
    this.amount = amount;
    return;
  }

}
