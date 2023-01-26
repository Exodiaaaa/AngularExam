import { Component, OnInit } from '@angular/core';
import {MyHttpService} from "../Services/my-http.service";
import {Timing} from "../Models/timing";
import {Date} from "../Models/date";

@Component({
  selector: 'app-my-api',
  templateUrl: './my-api.component.html',
  styleUrls: ['./my-api.component.css']
})
export class MyApiComponent implements OnInit {

  timing!:Timing[]
  date!:Date[]
  constructor(private myService:MyHttpService) { }

  ngOnInit(): void {
    this.myService.getTimes().subscribe(
      {
        next:response=>{
          this.timing=response.timing
          this.date=response.date
        }
      }
    )
  }

}
