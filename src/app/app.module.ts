﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SidebarModule } from 'ng-sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './_components';
import { SessionsComponent } from './sessions/sessions.component';
import { BatchehomeComponent } from './batchehome/batchehome.component';
import { ModalComponent } from './_modal/modal.component';
import { ArchivesComponent } from './archives/archives.component';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { appRoutingModule } from './app.routing';
import { DetailsComponent } from './archives/details/details.component'
;

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        SidebarModule.forRoot(),
        FontAwesomeModule,

    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        SessionsComponent,
        AlertComponent,
        BatchehomeComponent,
        ModalComponent
,
        ArchivesComponent ,
        DetailsComponent ,    ],

    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
