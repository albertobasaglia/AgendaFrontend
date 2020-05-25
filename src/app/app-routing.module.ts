import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/pages/login/login/login.component';
import {IsLoggedGuard} from './guards/IsLoggedGuard';
import {HomeComponent} from './components/pages/logged/home/home.component';
import {IsAlreadyLoggedGuard} from './guards/IsAlreadyLoggedGuard';
import {LoggedComponent} from './components/pages/logged/logged.component';
import {ProfileComponent} from './components/pages/logged/profile/profile.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivateChild: [IsAlreadyLoggedGuard]},
  {path: 'logged', canActivateChild: [IsLoggedGuard], component: LoggedComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: ProfileComponent}
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
