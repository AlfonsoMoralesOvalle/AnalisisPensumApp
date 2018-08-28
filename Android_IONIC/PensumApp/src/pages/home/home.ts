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
    cursos2 =[]
    constructor(public navCtrl: NavController, private modal: ModalController, public servicio:ServiciosProvider, public ej:EjemploProvider) {}

    //ABRE EL MODAL PARA PODER AGREGAR UN CURSO NUEVO
    addCourse()
    {
        const nueva = this.modal.create('AgregarCursoPage', {cursos2: this.cursos2});
        nueva.present();
    }

    ionViewDidLoad() {
        //AUN NO CARGO NADA
        this.cargarcursos();
    }

    cargarDatosDeDia(idDia)
    {
        
    }

    cargarcursos()
    {
    this.servicio.getcursos().subscribe(data => {this.cursos2.push(data)});
    console.log("mira");
    console.log(this.cursos2);
    console.log("mira2");
    }

}
