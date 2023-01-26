import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private httpClient:HttpClient) { }

  getTimes(){
    return this.httpClient.get("http://api.aladhan.com/v1/calendar?latitude=34.65&longitude=-1.89")
  }
}
