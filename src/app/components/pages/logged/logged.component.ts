import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.api.logout();
    this.router.navigate(['/login']);
  }

}
