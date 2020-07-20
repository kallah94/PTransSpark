import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers';
import { SessionsComponent } from './sessions/sessions.component';
import { BatchehomeComponent } from './batchehome/batchehome.component';
import { ModalComponent } from './_modal/modal.component';
const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'admin/newBatche', component: SessionsComponent},
    {path: 'batches', component: BatchehomeComponent},
    {path: 'modal', component: ModalComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
