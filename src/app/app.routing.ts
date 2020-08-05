import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers';
import { SessionsComponent } from './sessions/sessions.component';
import { BatchehomeComponent } from './batchehome/batchehome.component';
import { ModalComponent } from './_modal/modal.component';
import { ArchivesComponent } from './archives/archives.component';
import { DetailsComponent } from './archives/details/details.component'
const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
    {path: 'admin/newBatche', component: SessionsComponent, canActivate: [AuthGuard]},
    {path: 'batches', component: BatchehomeComponent, canActivate: [AuthGuard]},
    {path: 'modal', component: ModalComponent},
    {path: 'photoloadings', component: ArchivesComponent, canActivate: [AuthGuard]},
    {path: 'details', component: DetailsComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '/home' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
