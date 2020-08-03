import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/_services/session.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  photos: any;

  constructor(private sessionservice: SessionService) {
    
   }

  ngOnInit() {
      this.sessionservice.loadPhoto().subscribe(res => {
      this.photos = res;
      console.log('test', res);
    }) 
  }


}
