import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  constructor(
    protected sessionService: SessionService
  ) { }

  ngOnInit(): void {
  }

  session() {
      this.sessionService.create_session()
          .subscribe(res => {
            console.log("succes")
          }) 
  }

}
