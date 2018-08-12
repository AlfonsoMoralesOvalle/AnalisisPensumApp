import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from "ionic-angular";
import { ServiciosProvider } from '../../providers/servicios/servicios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    horario

    constructor(public navCtrl: NavController, private modal: ModalController, public servicio:ServiciosProvider) {}

    //ABRE EL MODAL PARA PODER AGREGAR UN CURSO NUEVO
    addCourse()
    {
        const nueva = this.modal.create('AgregarCursoPage');
        nueva.present();
    }

    ionViewDidLoad() {
        this.servicio.obtenerHorario().suscribe(
            (data) => {
                this.horario = data;
            },
            (error) => { console.log(error); }
        )
    }

}
