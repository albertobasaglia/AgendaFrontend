import { Component, OnInit } from '@angular/core';
import {Appuntamento} from '../../../models/appuntamento.model';
import {Promemoria} from '../../../models/promemoria.model';
import {ApiService} from '../../../services/api.service';
import {SourceMapUnion} from '@angular-devkit/build-angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

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
    this.api.getPromemoria()
      .subscribe((promemoria: Promemoria[]) => {
        this.promemoria = promemoria;
      });
    this.api.getAppuntamenti(
    ).subscribe((appuntamenti: Appuntamento[]) => {
      this.appuntamenti = appuntamenti;
    });
  }

  getInterval(cosa: Date) {
    const data = new Date(cosa);
    const month = data.getMonth();
    const day = data.getDate();
    return `${day}/${month}`;
  }
}
