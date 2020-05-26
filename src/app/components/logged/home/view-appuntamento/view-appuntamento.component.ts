import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ApiService} from '../../../../services/api.service';
import {Appuntamento} from '../../../../models/appuntamento.model';
import {Persona} from '../../../../models/persona.model';

@Component({
  selector: 'app-view-appuntamento',
  templateUrl: './view-appuntamento.component.html',
  styleUrls: ['./view-appuntamento.component.css']
})
export class ViewAppuntamentoComponent implements OnInit {

  id: number = null;
  appuntamento: Appuntamento = new Appuntamento();
  persone: Persona[] = [];

  constructor(private router: Router, private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.api.getAppuntamentoById(this.id).subscribe((appuntamento: Appuntamento) => {
        this.appuntamento = appuntamento;
      });
      this.api.personeInAppuntamentoById(this.id).subscribe((persone: Persona[]) => {
        this.persone = persone;
        console.table(persone);
      });
    });
  }

}
