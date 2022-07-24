import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public updated:boolean = false;
  public deleted:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public update():void{
    this.updated=true;
    console.log("Updated = "+this.updated);
    return;
  }

  public delete():void{
    this.deleted=true;
    console.log("Deleted = "+this.deleted);
    return;
  }

}
