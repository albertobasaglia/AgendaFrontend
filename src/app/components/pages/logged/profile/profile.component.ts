import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../../services/api.service';
import {Persona} from '../../../../models/persona.model';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Telefono} from '../../../../models/telefono.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  persona: Persona = null;
  success = false;
  profileForm = new FormGroup({
    nome: new FormControl(''),
    cognome: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl({value: '', disabled: true})
  });
  telefoniForm = new FormGroup({
    telefoni: new FormArray([])
  });
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getMe().subscribe((me: Persona) => {
      this.update(me);
    });
  }
  update(persona: Persona) {
    this.persona = persona;
    this.profileForm.patchValue(persona);
    this.telefoni.clear();
    persona.telefoni.forEach((telefono) => {
      this.addTelefono(telefono.numero);
    });
    this.telefoni.patchValue(persona.telefoni);
  }
  submit() {
    this.api.updatePerson(this.profileForm.value).subscribe((newPerson: Persona) => {
      this.update(newPerson);
      this.success = true;
    });
  }

  get telefoni() {
    return this.telefoniForm.get('telefoni') as FormArray;
  }

  addTelefono(value: string) {
    this.telefoni.push(new FormGroup({numero: new FormControl(value)}));
  }

  submitTelefoni() {
    this.api.replaceTelefoni(this.telefoniForm.value.telefoni)
      .subscribe((telefoni: Telefono[]) => {
        this.persona.telefoni = telefoni;
        this.update(this.persona);
      });
  }
}
