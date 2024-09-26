import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { IonicModule } from '@ionic/angular';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PantallaDocenteComponent } from './pantalla-docente/pantalla-docente.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    InicioSesionComponent,
    PantallaDocenteComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PagesRoutingModule,
    SharedModule


  ]
})
export class PagesModule { }
