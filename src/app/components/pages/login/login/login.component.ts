import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../../services/api.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)])
  });

  error = false;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.api.loginGetToken(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe((token: string) => {
        this.api.setToken(token);
        this.router.navigate(['/logged']);
      }, (error) => {
        this.error = true;
      });
  }

}
