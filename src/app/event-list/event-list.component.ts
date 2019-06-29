import { Component, OnInit } from '@angular/core';
import { CommonService } from '../serives/common.service';
import {  EventList } from '../serives/event-list';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  public  eventList:EventList[];
  error: any;
  constructor(private configService: CommonService) { }

  ngOnInit() {
    this.fetchEvents();
    //console.log(this.eventList);
  }

  private fetchEvents() {
    this.configService.getConfig()
      // .subscribe((res) => {
      //   console.log(res);
      // });
      .subscribe(
        (data:any) =>  {
          this.eventList = data, 
          console.log(data)
        }, // success path
        error => this.error = error 
      );
  }

}
