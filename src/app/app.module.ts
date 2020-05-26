import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/pages/login/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/pages/logged/home/home.component';
import {IsLoggedGuard} from './guards/IsLoggedGuard';
import {IsAlreadyLoggedGuard} from './guards/IsAlreadyLoggedGuard';
import { LoggedComponent } from './components/pages/logged/logged.component';
import { ProfileComponent } from './components/pages/logged/profile/profile.component';
import {RouterModule} from '@angular/router';
import { EmptyComponent } from './components/logged/home/empty/empty.component';
import { ViewAppuntamentoComponent } from './components/logged/home/view-appuntamento/view-appuntamento.component';
import { ViewPromemoriaComponent } from './components/logged/home/view-promemoria/view-promemoria.component';
import { NewAppuntamentoComponent } from './components/logged/home/new-appuntamento/new-appuntamento.component';
import { NewPromemoriaComponent } from './components/logged/home/new-promemoria/new-promemoria.component';
import {DlDateTimeDateModule, DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';
import { EventsComponent } from './components/pages/events/events.component';
import { BackComponent } from './components/pages/back/back.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoggedComponent,
    ProfileComponent,
    EmptyComponent,
    ViewAppuntamentoComponent,
    ViewPromemoriaComponent,
    NewAppuntamentoComponent,
    NewPromemoriaComponent,
    EventsComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    FormsModule,
  ],
  providers: [IsLoggedGuard, IsAlreadyLoggedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
