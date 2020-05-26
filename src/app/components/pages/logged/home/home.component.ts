import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../../services/api.service';
import {Appuntamento} from '../../../../models/appuntamento.model';
import {Promemoria} from '../../../../models/promemoria.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appuntamenti: Appuntamento[] = [];
  promemoria: Promemoria[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.update();
    this.api.update.subscribe(() => {
      this.update();
    });
  }
  update() {
    this.api.getAppuntamentoByDateInterval(
      new Date(),
      new Date(new Date().getTime() + (1000 * 60 * 60 * 24))
    )
      .subscribe((appuntamenti: Appuntamento[]) => {
        this.appuntamenti = appuntamenti;
      });
    this.api.getPromemoriaByDateInterval(
      new Date(),
      new Date(new Date().getTime() + (1000 * 60 * 60 * 24))
    ).subscribe((promemoria: Promemoria[]) => {
      this.promemoria = promemoria;
    });
  }

}
