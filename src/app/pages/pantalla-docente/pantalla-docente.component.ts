import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/asignatura/asignatura.module';

@Component({
  selector: 'app-pantalla-docente',
  templateUrl: './pantalla-docente.component.html',
  styleUrls: ['./pantalla-docente.component.scss'],
})
export class PantallaDocenteComponent  implements OnInit {
  asignaturas: Asignatura[] = [
    // Define tus asignaturas aquí
    {
      id: 1,
      nombre: 'MA_ASY4131_24213923',
      descripcion: 'Sección: ARQUITECTURA_002',
      fecha: '2024-09-28',
      hora: 'Lunes y Miércoles, 8:00 - 10:00',
      contenido: 'Detalles del curso'
    },
    {
      id: 2,
      nombre: 'FMA_PGY4121_24213927',
      descripcion: 'Sección: PROGRAMACION DE APLICACIONES MOVILES_001D',
      fecha: '2024-09-29',
      hora: 'Martes y Jueves, 10:00 - 12:00',
      contenido: 'Detalles del curso'
    },
    {
      id: 3,
      nombre: 'MA_PGY4121_24213927',
      descripcion: 'Sección: ESTADISTICA DESCRIPTIVA_013D',
      fecha: '2024-09-30',
      hora: 'Viernes, 8:00 - 10:00',
      contenido: 'Detalles del curso'
    }
  ];

  constructor() { }

  ngOnInit() {""}

}
