import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { ModalService } from '../_modal/modal.service';
import { SessionService } from '../_services/session.service';

@Component({ 
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];
    bodyText: string;
    photos: [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private modalService: ModalService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
        this.bodyText = 'This text can be updated';
    }

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    public openModal(id: string) {
        this.modalService.open(id);
    }

    public closeModal(id: string) {
        this.modalService.close(id);
    }

    public getPOIs(latitude: Number, longitude: number) {
        console.log(latitude, longitude);
    }
}