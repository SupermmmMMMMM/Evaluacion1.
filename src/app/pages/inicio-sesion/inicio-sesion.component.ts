import { Component, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent  {
  username: string = '';
  password: string = '';
  loginError: string = '';




  constructor(private router: Router) {}

  onLogin() {
    // Verificar las credenciales del usuario
    if (this.username === 'docente' && this.password === '1234') {
      localStorage.setItem('nombreUsuario', this.username);
      localStorage.setItem('tipoUsuario', 'docente');
      this.router.navigate(['/pantalla-docente']);
    } else if (this.username === 'alumno' && this.password === '1234') {
      localStorage.setItem('nombreUsuario', this.username);
      localStorage.setItem('tipoUsuario', 'alumno');
      this.router.navigate(['/pantalla-docente']);
    } else {
      this.loginError = 'Credenciales incorrectas';
    }
  }
}


