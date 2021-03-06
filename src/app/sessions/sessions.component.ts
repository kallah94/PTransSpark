import { Component, OnInit } from '@angular/core';
import { SessionService } from '../_services/session.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as fa from '@fortawesome/free-regular-svg-icons';
import * as fabrand from '@fortawesome/free-brands-svg-icons';
import { AlertService } from '../_services';
import { BatchSession } from '../_models/batch';


@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  batcheForm: FormGroup;
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
  ngOnInit() {
    this.batcheForm = this.formBuilder.group({
      file: ['/home/devtool/Lab/Web/PTransSpark/scripts/code/FinalScript.py', Validators.required],
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
    this.sessionService.saveModel(this.batcheForm.value)
    .subscribe(
        data => {
        this.alertService.success('Creation successful', true);
        console.log(this.loading);
        this.router.navigate(['/home']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
      }
}
