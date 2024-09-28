import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { IonicModule } from '@ionic/angular';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PantallaDocenteComponent } from './pantalla-docente/pantalla-docente.component';
import { DetallesAquitecturaComponent } from './detalles-aquitectura/detalles-aquitectura.component';
import { DetallesEstadisticaComponent } from './detalles-estadistica/detalles-estadistica.component';
import { DetallesProgramacionComponent } from './detalles-programacion/detalles-programacion.component';





@NgModule({
  declarations: [
    InicioSesionComponent,
    PantallaDocenteComponent,
    DetallesAquitecturaComponent,
    DetallesEstadisticaComponent,
    DetallesProgramacionComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PagesRoutingModule,
    SharedModule


  ]
})
export class PagesModule { }
