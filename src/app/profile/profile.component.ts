import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private _services:NewsapiservicesService){}

  topheadingDisplay:any=[];

  ngOnInit():void {
    this._services.topHeading().subscribe((result: any)=>{
      console.log(result);
      this.topheadingDisplay=result.articles;
    })
     
  }
}
