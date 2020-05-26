import { Component, OnInit } from '@angular/core';
import {Promemoria} from '../../../../models/promemoria.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ApiService} from '../../../../services/api.service';

@Component({
  selector: 'app-view-promemoria',
  templateUrl: './view-promemoria.component.html',
  styleUrls: ['./view-promemoria.component.css']
})
export class ViewPromemoriaComponent implements OnInit {

  constructor(private router: Router, private api: ApiService, private activatedRoute: ActivatedRoute) { }

  giorni = [
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
    'Domenica',
  ];

  mesi = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre'
  ];

  id: number = null;
  promemoria: Promemoria = new Promemoria();
  dayNumber;
  dayWeek;
  month;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.api.getPromemoriaById(this.id).subscribe((promemoria: Promemoria) => {
        this.promemoria = promemoria;
        this.dayNumber = (new Date(this.promemoria.dataInizio)).getDate();
        this.dayWeek = (new Date(this.promemoria.dataInizio)).getDay();
        this.month = (new Date(this.promemoria.dataInizio)).getMonth();
      });
    });
  }

}
