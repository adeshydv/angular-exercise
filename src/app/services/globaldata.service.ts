import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobaldataService {
  public selectedTab:String;
  public eventName:String;
  public seats:Number;

  constructor() { }
}
