import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerAsistenciaComponent } from './ver-asistencia/ver-asistencia.component';
import { CursoPage } from './curso.page';


const routes: Routes = [
  {
    path: '',
    component: CursoPage,
    children: [
      {path: 'ver-asistencia',
      component: VerAsistenciaComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoPageRoutingModule {}
