import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { ModalService } from '../_modal/modal.service';
import { SessionService } from '../_services/session.service';
import * as fa from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    fatrash = fa.faTrashAlt;
    fadetail = fa.faEye;
    faedit = fa.faEdit;
    currentUser: User;
    users = [];
    models = [];
    bodyText: string;
    photos: [];
    isadmin: Boolean;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private sessionService: SessionService,
        private modalService: ModalService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
        this.isadmin = this.IsAdmin()
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadAllModels();
        this.load();
        this.IsAdmin();
        this.bodyText = 'This text can be updated';
    }

    private IsAdmin() {
        const currentUser = this.authenticationService.currentUserValue;
        const admins = ['kallah', 'mbagnick', 'ouli'];
        if (admins.includes(currentUser.username)) {
            // authorised
            return true;
        } else {
            return false;
        }
    }
    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => {
                this.users = users;
                console.log(users);
            });
    }
/*
    private loadAllModels() {
        this.sessionService.getAllmodels()
          .pipe(first())
          .subscribe(models => this.models = models);
      }
*/
    public load() {
        this.sessionService.loadPyspark()
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
          }
        );
      }
    public openModal(id: string) {
        this.modalService.open(id);
    }

    public closeModal(id: string) {
        this.modalService.close(id);
    }

    public getPOIs(latitude: number, longitude: number) {
        console.log(latitude, longitude);
    }

    private loadAllModels() {
        this.sessionService.getAllmodels()
          .pipe(first())
          .subscribe(models => {
            this.models = models;
            console.log(this.models)
          });
      }
}
