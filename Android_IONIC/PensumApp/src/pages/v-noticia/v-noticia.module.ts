import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VNoticiaPage } from './v-noticia';

@NgModule({
  declarations: [
    VNoticiaPage,
  ],
  imports: [
    IonicPageModule.forChild(VNoticiaPage),
  ],
})
export class VNoticiaPageModule {}
