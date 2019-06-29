import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getConfig(){
    return this.http.get('./assets/eventList.json');
    //return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
    
}
}
