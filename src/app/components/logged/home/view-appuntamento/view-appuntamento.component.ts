import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ApiService} from '../../../../services/api.service';
import {Appuntamento} from '../../../../models/appuntamento.model';
import {Persona} from '../../../../models/persona.model';
import {Location} from '@angular/common';
@Component({
  selector: 'app-view-appuntamento',
  templateUrl: './view-appuntamento.component.html',
  styleUrls: ['./view-appuntamento.component.css']
})
export class ViewAppuntamentoComponent implements OnInit {

  id: number = null;
  appuntamento: Appuntamento = new Appuntamento();
  persone: Persona[] = [];

  constructor(private router: Router, private api: ApiService, private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.api.getAppuntamentoById(this.id).subscribe((appuntamento: Appuntamento) => {
        this.appuntamento = appuntamento;
      });
      this.api.personeInAppuntamentoById(this.id).subscribe((persone: Persona[]) => {
        this.persone = persone;
      });
    });
  }

  delete() {
    if (confirm('Sei sicuro di voler cancellare questo appuntamento?')) {
      this.api.deleteAppuntamentoById(this.id).subscribe(() => {
        this.location.back();
        this.api.update.next();
      });
    }
  }

}
