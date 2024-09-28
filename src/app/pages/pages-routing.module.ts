import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PantallaDocenteComponent } from './pantalla-docente/pantalla-docente.component';
import { DetallesAquitecturaComponent } from './detalles-aquitectura/detalles-aquitectura.component';
import { DetallesEstadisticaComponent } from './detalles-estadistica/detalles-estadistica.component';
import { DetallesProgramacionComponent } from './detalles-programacion/detalles-programacion.component';

const routes: Routes = [
  {path: '',component:InicioSesionComponent},
  {path:'inicio-sesion',component: InicioSesionComponent},
  {path: 'pantalla-docente',component: PantallaDocenteComponent},
  {path: 'detalles-arquitectura',component: DetallesAquitecturaComponent},
  {path: 'detalles-programacion',component: DetallesProgramacionComponent},
  {path: 'detalles-estadistica',component: DetallesEstadisticaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
