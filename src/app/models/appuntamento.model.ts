import {Persona} from './persona.model';

export class Appuntamento {
  id: number;
  descrizione: string;
  dataInizio: Date;
  dataFine: Date;
  persone: Persona[];
}
