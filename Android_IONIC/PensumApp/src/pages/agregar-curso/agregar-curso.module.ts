import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarCursoPage } from './agregar-curso';

@NgModule({
  declarations: [
    AgregarCursoPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarCursoPage),
  ],
})
export class AgregarCursoPageModule {}
