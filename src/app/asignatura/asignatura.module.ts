import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AsignaturaModule { }
export interface Asignatura {
  id: number; // o un identificador único
  nombre: string;
  descripcion: string;
  fecha: string;
  hora: string;
  contenido: string;
}
