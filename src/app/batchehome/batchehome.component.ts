import { Component, OnInit } from '@angular/core';
import { SessionService } from '../_services/session.service'
import { GetBatches } from '../_models/getBaches';

@Component({
  selector: 'app-batchehome',
  templateUrl: './batchehome.component.html',
  styleUrls: ['./batchehome.component.scss']
})
export class BatchehomeComponent implements OnInit {

  batches = new GetBatches();
  constructor(
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    console.log('est test');
    {
      this.sessionService.getbaches()
        .subscribe(res => {
          this.batches = res.body;
          console.log(this.batches);
        });
    }
  }

}
