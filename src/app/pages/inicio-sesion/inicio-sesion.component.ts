import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DatosUsuarioService } from 'src/app/servicios/datos-usuario.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  datosUsuario = inject(DatosUsuarioService)

  constructor(private router: Router) {}

  onSubmit() {
    this.datosUsuario.setTipo(this.username);

    if (this.username === 'docente' && this.password === '1234') {
      localStorage.setItem('nombreUsuario', this.username);
      localStorage.setItem('tipoUsuario', 'docente');
      this.router.navigate(['/pantalla-principal']);
    } else if (this.username === 'alumno' && this.password === '1234') {
      localStorage.setItem('nombreUsuario', this.username);
      localStorage.setItem('tipoUsuario', 'alumno');
      this.router.navigate(['/pantalla-principal']);
    } else {
      this.loginError = 'Credenciales incorrectas';
    }
  }

  restablecerContrasena() {
    this.router.navigate(['/restablecer-contrasena']);
  }
}
