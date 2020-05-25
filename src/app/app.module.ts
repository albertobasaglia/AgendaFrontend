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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [IsLoggedGuard, IsAlreadyLoggedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
