import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CursoPage } from './curso.page';

import { CursoPageRoutingModule } from './curso-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoPageRoutingModule
  ],
  declarations: [CursoPage]
})
export class CursoPageModule {}
