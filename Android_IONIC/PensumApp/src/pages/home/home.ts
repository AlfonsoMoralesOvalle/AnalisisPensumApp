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
    lunes : any;
    viernes: any;
    constructor(public navCtrl: NavController, private modal: ModalController, public proveedor:ServiciosProvider, public ej:EjemploProvider) {}

    //ABRE EL MODAL PARA PODER AGREGAR UN CURSO NUEVO
    addCourse()
    {
        const nueva = this.modal.create('AgregarCursoPage');
        nueva.present();
    }

    ionViewDidLoad() {
        this.obtenerDatosEjemplo();
    }

    //VA A OBTENER LOS DATOS
    obtenerDatosEjemplo()
    {
        this.lunes = this.ej.obtenerCursosPorDia();
        this.viernes = this.ej.obtenerCursosViernes();
    }

    quitaDeOpciones(idcurso, seccion)
    {
        //DEBE QUITAR OTRAS SECCIONAS EXCEPTO SECCION
        
    }

}
