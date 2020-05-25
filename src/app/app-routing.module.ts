import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/pages/login/login/login.component';
import {IsLoggedGuard} from './guards/IsLoggedGuard';
import {HomeComponent} from './components/pages/logged/home/home.component';
import {IsAlreadyLoggedGuard} from './guards/IsAlreadyLoggedGuard';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivateChild: [IsAlreadyLoggedGuard]},
  {path: 'logged', canActivateChild: [IsLoggedGuard], children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent}
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
