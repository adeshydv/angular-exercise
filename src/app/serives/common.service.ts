import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getConfig(): Observable<any> {
    let returnVal = this.http.get('./assets/eventList.json');
    console.log(returnVal);
    return returnVal;
}
}
