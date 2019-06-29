import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from '../serives/globaldata.service';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.css']
})
export class BookEventComponent implements OnInit {
  public eventName: String;
  public seats: Number;
  constructor(private globaldataObj: GlobaldataService,) { }

  ngOnInit() {
    this.eventName = this.globaldataObj.eventName;
    this.seats = this.globaldataObj.seats;
  }

}
