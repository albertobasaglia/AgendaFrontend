import {Persona} from './persona.model';

export class Promemoria {
  id: number;
  persona: Persona;
  descrizione: string;
  dataInizio: Date;
  dataFine: Date;
  ricorrenza: string;
}
