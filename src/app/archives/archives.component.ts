import { Component, OnInit } from '@angular/core';
import { SessionService } from '../_services/session.service';
import { Photo } from '../photo';
import { PHOTOS } from '../mock-photos';
import { BatchSession } from '../_models/batch';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {

  photos: any;
  images  = PHOTOS;
  selectedPhoto: Photo;
  batch: BatchSession;

  constructor(private sessionservice: SessionService) {

    
   }

  ngOnInit() {
    this.sessionservice.loadPhoto().subscribe(res => {
      this.photos  =res;
      console.log('test', res);
    }) 
  }

  onSelected(image: Photo): void {4200
    this.selectedPhoto  = image;
  }

  private loadPOI(alt: number, long: number) {
    this.sessionservice.loadPyspark()
    .subscribe(res  => {
      console.log(res)
    })
  }


}
