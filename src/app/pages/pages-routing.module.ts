import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PantallaDocenteComponent } from './pantalla-docente/pantalla-docente.component';

const routes: Routes = [
  {path: '',component:InicioSesionComponent},
  {path:'inicio-sesion',component: InicioSesionComponent},
  {path: 'pantalla-docente',component: PantallaDocenteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
