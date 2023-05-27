import { Component,OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'userInterFace';
  recieveData:any;

  constructor(public obj:ServiceService){

  }

  ngOnInit(): void {
    this.obj.getAllData().subscribe((data)=>{
     this.recieveData=data;
    })
  }

  

}

