import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    horario

    constructor(public navCtrl: NavController, private modal: ModalController) {}

    //ABRE EL MODAL PARA PODER AGREGAR UN CURSO NUEVO
    addCourse()
    {
        const nueva = this.modal.create('AgregarCursoPage');
        nueva.present();
    }

}
