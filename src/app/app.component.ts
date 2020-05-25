import {Component, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';
import {Persona} from './models/persona.model';
import {Appuntamento} from './models/appuntamento.model';
import {AppuntamentoSend} from './models/appuntamentoSend.model';
import {Promemoria} from './models/promemoria.model';
import {Telefono} from './models/telefono.model';

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
      // this.api.listPeople().subscribe((persone: Persona[]) => console.log(persone));
      // this.api.listAppuntamento().subscribe((appuntamenti: Appuntamento[]) => console.log(appuntamenti));
      // this.api.getAppuntamentoById(29).subscribe((appuntamento: Appuntamento) => console.log(appuntamento));
      // const appuntamentoSend: AppuntamentoSend = new AppuntamentoSend();
      // appuntamentoSend.personaIds = [2, 10];
      // appuntamentoSend.descrizione = 'creato da angular';
      // appuntamentoSend.dataInizio = new Date();
      // appuntamentoSend.dataFine = new Date();
      // this.api.createAppuntamento(appuntamentoSend).subscribe((appuntamento: Appuntamento) => {
      //   this.api.getAppuntamentoById(appuntamento.id).subscribe((appuntamento) => console.log(appuntamento));
      // });
      // this.api.listPromemoria().subscribe((res: Promemoria[]) => console.log(new Date(res[0].dataFine).getFullYear()));
      // const tel = new Telefono();
      // tel.numero = '00000';
      // this.api.createTelefono(tel).subscribe();
    }));
  }

}
