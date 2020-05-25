import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Persona} from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';
  private token = 'randomtoken';
  constructor(private http: HttpClient) { }

  private getHeader(): string {
    return `Bearer ${this.token}`;
  }
  private getHeaderField(): {Authorization: string} {
    return {Authorization: this.getHeader()};
  }
  private getHeaderOptions(): {headers: {}} {
    return {headers: {
        Authorization: this.getHeader()} };
  }

  public setToken(token: string) {
    this.token = token;
  }


  loginGetToken(username: string, password: string): Observable<string> {
    return this.http.post(`${this.apiUrl}/authenticate`, {username, password}).pipe(map((res: {token: string}) => res.token));
  }
  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, {username, password});
  }
  getMe(): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiUrl}/persona/me`, this.getHeaderOptions());
  }

}
