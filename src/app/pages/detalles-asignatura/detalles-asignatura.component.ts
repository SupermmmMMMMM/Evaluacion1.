import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from 'src/app/asignatura/asignatura.module';

@Component({
  selector: 'app-detalles-asignatura',
  templateUrl: './detalles-asignatura.component.html',
  styleUrls: ['./detalles-asignatura.component.scss'],
})
export class DetallesAsignaturaComponent implements OnInit {
  asignatura: Asignatura | undefined;
  tipoUsuario?: string;
  qrData: string = '';
  escaneando: boolean = false;

  asignaturas: Asignatura[] = [
    {
      id: 1,
      nombre: 'Arquitectura',
      descripcion: 'Descripcion de arquitectura',
      fecha: '2024-09-28',
      hora: '10:00 AM',
      contenido: 'Contenido de arquitectura',
    },
    {
      id: 2,
      nombre: 'Programacion',
      descripcion: 'Descripcion de programacion',
      fecha: '2024-09-28',
      hora: '10:00 AM',
      contenido: 'Contenido de programacion',
    },
    {
      id: 3,
      nombre: 'Estadistica',
      descripcion: 'Descripcion de estadistica',
      fecha: '2024-09-28',
      hora: '10:00 AM',
      contenido: 'Contenido de estadistica',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.tipoUsuario = localStorage.getItem('tipoUsuario') || '';
    const asignaturaId = +this.route.snapshot.paramMap.get('id')!;
    this.asignatura = this.asignaturas.find(asignatura => asignatura.id === asignaturaId);
  }
  generarQR() {
    // Lógica para generar el QR
    console.log('Generando QR para la asignatura:', this.asignatura?.nombre);
    // Aquí podrías utilizar alguna librería para generar el QR, o cualquier otra lógica que necesites.
  }

  iniciarEscaneo() {
    this.escaneando = true;
  }

  onScanSuccess(result: string) {
    console.log('QR Escaneado: ', result);
    this.escaneando = false;
  }
}
