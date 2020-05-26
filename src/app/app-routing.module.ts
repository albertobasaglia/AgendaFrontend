import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/pages/login/login/login.component';
import {IsLoggedGuard} from './guards/IsLoggedGuard';
import {HomeComponent} from './components/pages/logged/home/home.component';
import {IsAlreadyLoggedGuard} from './guards/IsAlreadyLoggedGuard';
import {LoggedComponent} from './components/pages/logged/logged.component';
import {ProfileComponent} from './components/pages/logged/profile/profile.component';
import {EmptyComponent} from './components/logged/home/empty/empty.component';
import {ViewAppuntamentoComponent} from './components/logged/home/view-appuntamento/view-appuntamento.component';
import {ViewPromemoriaComponent} from './components/logged/home/view-promemoria/view-promemoria.component';
import {NewAppuntamentoComponent} from './components/logged/home/new-appuntamento/new-appuntamento.component';
import {NewPromemoriaComponent} from './components/logged/home/new-promemoria/new-promemoria.component';
import {EventsComponent} from './components/pages/events/events.component';
import {BackComponent} from './components/pages/back/back.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivateChild: [IsAlreadyLoggedGuard]},
  {path: 'logged', canActivateChild: [IsLoggedGuard], component: LoggedComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent , children: [
          {path: '', component: EmptyComponent},
          {path: 'appuntamento/:id', component: ViewAppuntamentoComponent},
          {path: 'promemoria/:id', component: ViewPromemoriaComponent},
          {path: 'newAppuntamento', component: NewAppuntamentoComponent},
          {path: 'newPromemoria', component: NewPromemoriaComponent},
          {path: '**', redirectTo: ''}
        ]},
      {path: 'profile', component: ProfileComponent},
      {path: 'viewer', component: BackComponent, children: [
          {path: 'appuntamento/:id', component: ViewAppuntamentoComponent},
          {path: 'promemoria/:id', component: ViewPromemoriaComponent},
        ]},
      {path: 'eventi', component: EventsComponent}
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
