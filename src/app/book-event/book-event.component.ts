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
  public seats: any;
  public name: String = '';
  public name2: String = '';
  public name3: String = '';
  public name4: String = '';
  public name5: String = '';
  public name6: String = '';
  public email: String = '';
  public noofseats: any = '';
  public phonenumber: String = '';
  public btnDisbled:boolean=false;

  constructor(private globaldataObj: GlobaldataService,
    private toastr: ToastrService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.eventName = this.globaldataObj.eventName;
    this.seats = this.globaldataObj.seats;
  }

  public submit() {
    this.seats = this.seats - this.noofseats;
    this.btnDisbled = true;
    this.resetForm();
    this.toastr.success('Form submitted successfuly!', this.eventName);
  }

  private resetForm() {
    this.name = '';
    this.name2 = '';
    this.name3 = '';
    this.name4 = '';
    this.name5 = '';
    this.name6 = '';
    this.email = '';
    this.noofseats = '';
    this.phonenumber = '';

  }

  public cancel() {
    this.router.navigate(['/eventList'], { skipLocationChange: true });
  }

}
