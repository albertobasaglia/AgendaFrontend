import {Telefono} from './telefono.model';

export class Persona {
  id: number;
  nome: string;
  cognome: string;
  email: string;
  username: string;
  telefoni: Telefono[];
}
