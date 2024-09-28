import { DatosAsignaturaService } from './../../servicios/datos-asignatura.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosUsuarioService } from 'src/app/servicios/datos-usuario.service';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.component.html',
  styleUrls: ['./detalle-asignatura.component.scss'],
})
export class DetalleAsignaturaComponent implements OnInit {

  tipoUsuario?: string;
  nombre!: string;
  datosAsignatura = inject(DatosAsignaturaService);
  datosUsuario = inject(DatosUsuarioService);
  constructor(private router: Router) {}

  ngOnInit() {
    this.nombre = this.datosAsignatura.getNombre();
    this.tipoUsuario = this.datosUsuario.getTipo();
  }
  generarQR() {
    this.router.navigate(['/qr']);
  }

  abrirCamara() {
    this.router.navigate(['/camara']);
  }
}
