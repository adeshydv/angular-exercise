import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public clickedTab: string  = 'Event List';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  public navigateUrl(ulrStr:String){
    if(ulrStr == 'Home' || ulrStr == 'Event List'){
      this.router.navigate(['/eventList'], { skipLocationChange: true });
      this.clickedTab = 'Event List';

    }else if(ulrStr == 'bookEvent'){
      this.router.navigate(['/bookEvent'], { skipLocationChange: true });
      this.clickedTab = 'bookEvent';
    }

  }

}
