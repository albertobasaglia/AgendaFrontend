import {Component, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';
import {Persona} from './models/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngagenda';

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.loginGetToken('capataci', 'q100q100').subscribe((value => {
      this.api.setToken(value);
      this.api.getMe().subscribe((persona: Persona) => console.log(persona));
    }));
  }

}
