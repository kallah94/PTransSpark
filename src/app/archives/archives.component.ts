import { Component, OnInit } from '@angular/core';
import { SessionService } from '../_services/session.service';
import { Photo } from '../photo';
import { PHOTOS } from '../mock-photos';
import { BatchSession } from '../_models/batch';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

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

  onSelected(image: Photo): void {
    this.selectedPhoto  = image;
  }

  loadPOI(long: string, lat: string) 
{
     this.sessionservice.loadPyspark()
    .subscribe(res => {
      this.batch = res;
      this.batch.args = [lat, long, lat.concat(long)] 
      this.batch.name = this.batch.name.concat(this.batch.args[2])
  })
  this.sessionservice.createBatche(this.batch)
  .subscribe(res => {
    console.log("ok", res)
  })

}
}