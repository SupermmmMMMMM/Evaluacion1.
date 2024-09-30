import { Component, inject, OnInit } from '@angular/core';
import { DatosUsuarioService } from 'src/app/servicios/datos-usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  datosUsuario = inject(DatosUsuarioService);
  nombre!: string;
  constructor() { }

  ngOnInit() {
    this.nombre = this.datosUsuario.getTipo();
  }

}
