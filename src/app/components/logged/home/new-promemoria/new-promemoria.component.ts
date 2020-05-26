import { Component, OnInit } from '@angular/core';
import {PromemoriaSend} from '../../../../models/promemoriaSend.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../../services/api.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Promemoria} from '../../../../models/promemoria.model';
import {Location} from '@angular/common';
@Component({
  selector: 'app-new-promemoria',
  templateUrl: './new-promemoria.component.html',
  styleUrls: ['./new-promemoria.component.css']
})
export class NewPromemoriaComponent implements OnInit {

  formPromemoria = new FormGroup({
    dataInizio: new FormControl(new Date()),
    dataFine: new FormControl(new Date()),
    ricorrenza: new FormControl('', [Validators.required]),
    descrizione: new FormControl('', [Validators.required, Validators.minLength(10)])
  });
  id = null;
  editMode = false;
  constructor(private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute, private location: Location) {
    activatedRoute.params.subscribe((params: Params) => {
      if (params.id != null) {
        this.id = params.id;
        this.editMode = true;
        this.api.getPromemoriaById(this.id).subscribe((promemoria: Promemoria) => {
          this.formPromemoria.patchValue({
            dataInizio: new Date(promemoria.dataInizio),
            dataFine: new Date(promemoria.dataInizio),
            descrizione: promemoria.descrizione,
            ricorrenza: promemoria.ricorrenza
          });
        });
      }
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.editMode) {
      this.api.updatePromemoriaById(this.formPromemoria.value, this.id).subscribe((promemoria: Promemoria) => {
        this.router.navigate(['/logged', 'home', 'promemoria', promemoria.id]);
      });
    } else {
      this.api.createPromemoria(this.formPromemoria.value).subscribe((promemoria: Promemoria) => {
        this.router.navigate(['/logged', 'home', 'promemoria', promemoria.id]);
        this.api.update.next();
      });
    }
  }

  delete() {
    if (confirm('Sei sicuro di voler cancellare questo promemoria?')) {
      this.api.deletePromemoriaById(this.id).subscribe(() => {
        this.router.navigate(['/logged', 'home']);
        this.api.update.next();
      });

    }
  }

}
