import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';
import { User } from 'src/user';
import { Kinds } from 'src/kind.enum';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  public user = new User()
  constructor(
    protected sessionService: SessionService
  ) { }

  ngOnInit(): void {
    
  }
  createSession() {
    this.user.kind = Kinds.pyspark
    this.user.name = 'k@ll@h'
    this.user.proxyUser = 'devtool'
    this.user.driverCores = 3
    this.user.driverMemory = '2g'
    this.sessionService.create_session(this.user)
        .subscribe(res => {
          console.log(res.body)
        })
    console.log("user schema ", this.user)
  }

  deleteSession() {
    this.sessionService.delete_session(16)
      .subscribe(res => {
        console.log(res.body)
      })
  } 

  infoSession() {
    this.sessionService.info_session(0)
        .subscribe( res => {
          console.log(res.body)
        })
  }
  allsessions() {
    this.sessionService.get_sessions()
        .subscribe( res => {
          console.log(res.body)
        })
  }

  createStatement() {
    this.sessionService.create_statement(0)
          .subscribe( res => {
            console.log("resultat ", res.body)
          })
  }

}
