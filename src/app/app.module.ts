import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/pages/login/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/pages/logged/home/home.component';
import {IsLoggedGuard} from './guards/IsLoggedGuard';
import {IsAlreadyLoggedGuard} from './guards/IsAlreadyLoggedGuard';
import { LoggedComponent } from './components/pages/logged/logged.component';
import { ProfileComponent } from './components/pages/logged/profile/profile.component';
import {RouterModule} from '@angular/router';
import { EmptyComponent } from './components/logged/home/empty/empty.component';
import { ViewAppuntamentoComponent } from './components/logged/home/view-appuntamento/view-appuntamento.component';
import { ViewPromemoriaComponent } from './components/logged/home/view-promemoria/view-promemoria.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoggedComponent,
    ProfileComponent,
    EmptyComponent,
    ViewAppuntamentoComponent,
    ViewPromemoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [IsLoggedGuard, IsAlreadyLoggedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
