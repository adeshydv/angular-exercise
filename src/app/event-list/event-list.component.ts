import { Component, OnInit } from '@angular/core';
import { CommonService } from '../serives/common.service';
import {  EventList } from '../serives/event-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  public  eventList:EventList[];
  public eventList1=[
    {
      "name": "New Orleans Mardi Gras",
      "eventDate": "2019-06-26",
      "noOfSeats": 0,
      "imgLink": "https://s3.amazonaws.com/extras.dayzeroproject.com/8251_100.jpg",
      
    },
    {
      "name": "Coachella Valley Music and Arts Festival",
      "eventDate": "2019-06-26",
      "noOfSeats": 56,
      "imgLink": "https://s3.amazonaws.com/extras.dayzeroproject.com/8255_100.jpg",
      
    },
    {
      "name": "Glastonbury Festival",
      "eventDate": "2019-06-26",
      "noOfSeats": 0,
      "imgLink": "https://s3.amazonaws.com/extras.dayzeroproject.com/8252_100.jpg",
      
    },
    {
      "name": "Burning Man",
      "eventDate": "2019-06-26",
      "noOfSeats": 56,
      "imgLink": "https://s3.amazonaws.com/extras.dayzeroproject.com/8284_100.jpg",
      
    },
    {
      "name": "Rio Carnival‎",
      "eventDate": "2019-06-26",
      "noOfSeats": 56,
      "imgLink": "https://s3.amazonaws.com/extras.dayzeroproject.com/8256_100.jpg",
      
    },
    {
      "name": "Wimbledon",
      "eventDate": "2019-06-26",
      "noOfSeats": 56,
      "imgLink": "https://s3.amazonaws.com/extras.dayzeroproject.com/8272_100.jpg",
      
    },
    {
      "name": "St. Patrick's Day",
      "eventDate": "2019-06-26",
      "noOfSeats": 56,
      "imgLink": "https://s3.amazonaws.com/extras.dayzeroproject.com/8254_100.jpg",
      
    },
    {
      "name": "SXSW ",
      "eventDate": "2019-06-26",
      "noOfSeats": 56,
      "imgLink": "https://s3.amazonaws.com/extras.dayzeroproject.com/8276_100.jpg",
      
    },
    {
      "name": "Cannes Film Festival",
      "eventDate": "2019-06-26",
      "noOfSeats": 56,
      "imgLink": "https://s3.amazonaws.com/extras.dayzeroproject.com/8258_100.jpg",
      
    },
    {
      "name": "Super Bowl",
      "eventDate": "2019-06-26",
      "noOfSeats": 56,
      "imgLink": "https://s3.amazonaws.com/extras.dayzeroproject.com/8268_100.jpg",
      
    },
    {
      "name": "Sydney New Year's Eve",
      "eventDate": "2019-06-26",
      "noOfSeats": 56,
      "imgLink": "https://s3.amazonaws.com/extras.dayzeroproject.com/8295_100.jpg",
      
    }
  ];
  error: any;
  constructor(private configService: CommonService, private router: Router) { }

  ngOnInit() {
    //this.fetchEvents();
  }

  public bookNow(){
    this.router.navigate(['/bookEvent'], { skipLocationChange: true });
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
