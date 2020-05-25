import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../../services/api.service';
import {Persona} from '../../../../models/persona.model';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

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
    username: new FormControl('')
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
  }
  submit() {
    this.api.updatePerson(this.profileForm.value).subscribe((newPerson: Persona) => {
      this.update(newPerson);
      this.success = true;
    });
  }

}
