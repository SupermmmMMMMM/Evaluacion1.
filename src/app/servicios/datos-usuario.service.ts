import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {

  tipo!: string;

  constructor() { }

  setTipo(tipo: string) {
    this.tipo = tipo;
  }

  getTipo(): string {
    return this.tipo;
  }
}
