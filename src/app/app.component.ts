import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as fa from '@fortawesome/free-solid-svg-icons';

import { AuthenticationService } from './_services';
import { User } from './_models';
@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  closeResult: string;
  currentUser: User;
  _opened = false;
  isAdmin = false;
  faatom = fa.faAtom;
  fahome = fa.faHome;
  falogin = fa.faSignInAlt;
  falogout = fa.faSignOutAlt;
  faregister = fa.faUserPlus;
  fasession = fa.faPlusCircle;
  faupdate = fa.faCogs;
  fadelete = fa.faTrash;
  fasess = fa.faRoad;
  falist = fa.faList;
  fastatement = fa.faShareAlt;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      const admins = ['kallah', 'mbagnick', 'olimata']
      if (this.currentUser) {
        this.isAdmin = admins.includes(this.currentUser.username)
      }
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

 
}
