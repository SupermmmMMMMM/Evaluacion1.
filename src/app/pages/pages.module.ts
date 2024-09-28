import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { IonicModule } from '@ionic/angular';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PantallaDocenteComponent } from './pantalla-docente/pantalla-docente.component';


import { FormsModule } from '@angular/forms';
import { DetallesAsignaturaComponent } from './detalles-asignatura/detalles-asignatura.component';





@NgModule({
  declarations: [
    InicioSesionComponent,
    PantallaDocenteComponent,

    DetallesAsignaturaComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule


  ]
})
export class PagesModule { }
