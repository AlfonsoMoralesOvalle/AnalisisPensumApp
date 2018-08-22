import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from "ionic-angular";
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { EjemploProvider } from "../../providers/ejemplo/ejemplo";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    horario
    
    constructor(public navCtrl: NavController, private modal: ModalController, public proveedor:ServiciosProvider, public ej:EjemploProvider) {}

    //ABRE EL MODAL PARA PODER AGREGAR UN CURSO NUEVO
    addCourse()
    {
        const nueva = this.modal.create('AgregarCursoPage');
        nueva.present();
    }

    ionViewDidLoad() {
        //AUN NO CARGO NADA
    }

    cargarDatosDeDia(idDia)
    {
        
    }

}
