import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../../services/api.service';
import {Router} from '@angular/router';
import {Promemoria} from '../../../../models/promemoria.model';
import {Appuntamento} from '../../../../models/appuntamento.model';
import {Persona} from '../../../../models/persona.model';

@Component({
  selector: 'app-new-appuntamento',
  templateUrl: './new-appuntamento.component.html',
  styleUrls: ['./new-appuntamento.component.css']
})
export class NewAppuntamentoComponent implements OnInit {

  formAppuntamento = new FormGroup({
    dataInizio: new FormControl(new Date()),
    dataFine: new FormControl(new Date()),
    personaIds: new FormControl([], [Validators.required]),
    descrizione: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  persone: Persona[] = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.listPeople().subscribe((persone: Persona[]) => {
      this.persone = persone;
    });
  }

  onSubmit() {
    this.api.createAppuntamento(this.formAppuntamento.value).subscribe((appuntamento: Appuntamento) => {
      this.router.navigate(['/logged', 'home', 'appuntamento', appuntamento.id]);
      this.api.update.next();
    });
  }

}
