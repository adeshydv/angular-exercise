import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { EventList } from '../services/event-list';
import { Router } from '@angular/router';
import { GlobaldataService } from '../services/globaldata.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  public eventList: EventList[] =[];
  error: any;
  public searchText: String;

  constructor(private configService: CommonService,
    private globaldataObj: GlobaldataService,
    private router: Router) { }

  ngOnInit() {
    console.log("Inside ngonit");
    this.fetchEvents();
  }

  public bookNow(eventName: String, seats: any) {
    this.router.navigate(['/bookEvent'], { skipLocationChange: true });
    this.globaldataObj.eventName = eventName;
    this.globaldataObj.seats = seats;
  }

  private fetchEvents() {
    this.configService.getConfig()
      .subscribe(
      (res: any) => {
        console.log(res);
        this.eventList = res;
      },
      (error) => {
        console.log("error in loading eventlist: ");
        console.log(error);
      }
      );
  }

}
