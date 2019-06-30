import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from '../serives/globaldata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.css']
})
export class BookEventComponent implements OnInit {
  public eventName: any;
  public seats: Number;
  public name: String;
  public email: String;
  public noofseats: String = '';
  public phonenumber: String;

  constructor(private globaldataObj: GlobaldataService,
    private toastr: ToastrService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.eventName = this.globaldataObj.eventName;
    this.seats = this.globaldataObj.seats;
  }

  public submit() {
    this.toastr.success('Form submitted successfuly!', this.eventName);
  }

  public cancel() {
    this.router.navigate(['/eventList'], { skipLocationChange: true });
  }

}
