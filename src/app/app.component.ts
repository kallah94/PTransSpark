import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import  { faAtom, faUserAlt, faSignInAlt, faSignOutAlt, faRegistered, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { AuthenticationService } from './_services';
import { User } from './_models';

import './_content/app.less';

@Component({ 
 selector: 'app',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.scss']
 })

export class AppComponent {
    currentUser: User;
     _opened: boolean = false;
    faatom = faAtom
    falogin = faSignInAlt
    falogout = faSignOutAlt
    faregister = faUserPlus
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    public _toggleSidebar() {
        this._opened = !this._opened;
      }  
}
