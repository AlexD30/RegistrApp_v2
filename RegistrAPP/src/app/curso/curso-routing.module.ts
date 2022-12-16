import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerAsistenciaComponent } from './ver-asistencia/ver-asistencia.component';
import { CursoPage } from './curso.page';
import { BrowserModule } from '@angular/platform-browser';


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
  imports: [BrowserModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoPageRoutingModule {}
