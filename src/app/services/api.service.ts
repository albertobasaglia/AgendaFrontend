import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Persona} from '../models/persona.model';
import {Appuntamento} from '../models/appuntamento.model';
import {AppuntamentoSend} from '../models/appuntamentoSend.model';
import {Promemoria} from '../models/promemoria.model';
import {PromemoriaSend} from '../models/promemoriaSend.model';
import {Telefono} from '../models/telefono.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';
  private token = 'notlogged';
  constructor(private http: HttpClient) { }

  private getHeader(): string {
    return `Bearer ${this.token}`;
  }
  private getHeaderField(): {Authorization: string} {
    return {Authorization: this.getHeader()};
  }
  private getHeaderOptions(): {headers: {}} {
    return {headers: this.getHeaderField() };
  }

  public setToken(token: string) {
    this.token = token;
  }

  public isLogged(): boolean {
    return this.token !== 'notlogged';
  }

  // authentication
  loginGetToken(username: string, password: string): Observable<string> {
    return this.http.post(`${this.apiUrl}/authenticate`, {username, password}).pipe(map((res: {token: string}) => res.token));
  }
  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, {username, password});
  }

  // persona

  getMe(): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiUrl}/persona/me`, this.getHeaderOptions());
  }
  listPeople(query: string = ''): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.apiUrl}/persona/list/${query}`, this.getHeaderOptions());
  }

  // appuntamento

  listAppuntamento(): Observable<Appuntamento[]> {
    return this.http.get<Appuntamento[]>(`${this.apiUrl}/appuntamento/view`, this.getHeaderOptions());
  }
  getAppuntamentoById(id: number): Observable<Appuntamento> {
    return this.http.get<Appuntamento>(`${this.apiUrl}/appuntamento/view/${id.toString()}`, this.getHeaderOptions());
  }
  createAppuntamento(appuntamentoSend: AppuntamentoSend): Observable<Appuntamento> {
    return this.http.post<Appuntamento>(`${this.apiUrl}/appuntamento/create`, appuntamentoSend, this.getHeaderOptions());
  }
  deleteAppuntamentoById(id: number): Observable<Appuntamento> {
    return this.http.delete<Appuntamento>(`${this.apiUrl}/appuntamento/delete/${id.toString()}`, this.getHeaderOptions());
  }

  // promemoria

  listPromemoria(): Observable<Promemoria[]> {
    return this.http.get<Promemoria[]>(`${this.apiUrl}/promemoria/view`, this.getHeaderOptions());
  }
  getPromemoriaById(id: number): Observable<Promemoria> {
    return this.http.get<Promemoria>(`${this.apiUrl}/promemoria/view/${id.toString()}`, this.getHeaderOptions());
  }
  createPromemoria(promemoriaSend: PromemoriaSend): Observable<Promemoria> {
    return this.http.post<Promemoria>(`${this.apiUrl}/promemoria/create`, promemoriaSend, this.getHeaderOptions());
  }
  deletePromemoriaById(id: number): Observable<Promemoria> {
    return this.http.delete<Promemoria>(`${this.apiUrl}/promemoria/delete/${id.toString()}`, this.getHeaderOptions());
  }

  // telefono

  createTelefono(telefono: Telefono): Observable<any> {
    return this.http.post(`${this.apiUrl}/telefono/create`, telefono, this.getHeaderOptions());
  }

}
