import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import * as fa from '@fortawesome/free-regular-svg-icons';
import * as fabrand from '@fortawesome/free-brands-svg-icons';
import { AlertService } from '../_services';
import { LivyUser } from '../_models/livyuser';
import { Kinds } from 'src/kind.enum';
import { BatchSession } from '../_models/batch';


@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  batcheForm: FormGroup;
  user = new LivyUser();
  batche: BatchSession;
  loading = false;
  submitted =  false;
  fafile = fa.faFile;
  fapython = fabrand.faPython;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private sessionService: SessionService,
    private alertService: AlertService
  ) {}


  subUser() {
    this.user.kind = Kinds.pyspark;
    this.user.name = 'kallah';
    this.sessionService.create_session(this.user).subscribe(res => {
      console.log(res.status);
    });
  }
  ngOnInit() {
    this.batcheForm = this.formBuilder.group({
      file: ['', Validators.required],
      args: [''],
      driverMemory: ['32g'],
      driverCores: [3],
      executorMemory: ['32g'],
      numExecutors: [2],
      name: ['Pyspark']
    });
  }

  get f() { return this.batcheForm.controls; }

  onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.batcheForm.invalid) {
          return;
        }
        this.loading = true;
        console.log(this.batcheForm.value);
        this.batche = new BatchSession(this.batcheForm.value);
        this.sessionService.createBatche(this.batche)
          .subscribe(
            data => {
              this.alertService.success('Creation successful', true);
              this.router.navigate(['/']);
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            });
      }
}
