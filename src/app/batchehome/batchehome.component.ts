import { Component, OnInit } from '@angular/core';
import { SessionService } from '../_services/session.service';
import { GetBatches } from '../_models/getBaches';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-batchehome',
  templateUrl: './batchehome.component.html',
  styleUrls: ['./batchehome.component.scss']
})
export class BatchehomeComponent implements OnInit {

  batches = new GetBatches();
  models = [];
  constructor(
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.sessionService.getbaches()
      .subscribe(res => {
        this.batches = res.body;
      });
    this.loadAllModels();
  }
  private loadAllModels() {
    this.sessionService.getAllmodels()
      .pipe(first())
      .subscribe(models => this.models = models);
  }
}
