import { Component, OnInit } from '@angular/core';
import { SessionService } from '../_services/session.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {

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
