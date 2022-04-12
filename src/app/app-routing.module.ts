import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginComponent } from './component/auto-login/auto-login.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './home/home.component';
import { AlreadyLoginGuard } from './shared/guards/already-login.guard';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

const routes: Routes = [
  { path: '', component: AutoLoginComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AlreadyLoginGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
