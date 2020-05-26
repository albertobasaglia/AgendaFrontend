import { Component, OnInit } from '@angular/core';
import {PromemoriaSend} from '../../../../models/promemoriaSend.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../../services/api.service';
import {Router} from '@angular/router';
import {Promemoria} from '../../../../models/promemoria.model';

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
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.api.createPromemoria(this.formPromemoria.value).subscribe((promemoria: Promemoria) => {
      this.router.navigate(['/logged', 'home', 'promemoria', promemoria.id]);
      this.api.update.next();
    });
  }

}
