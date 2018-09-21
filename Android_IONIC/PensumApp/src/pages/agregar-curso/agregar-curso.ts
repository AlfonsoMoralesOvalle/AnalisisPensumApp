import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ServiciosProvider } from "../../providers/servicios/servicios";
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  	selector: 'page-agregar-curso',
  	templateUrl: 'agregar-curso.html',
})

export class AgregarCursoPage {
	  
	cursos
  	  
	constructor(public navCtrl: NavController, public navParams: NavParams, private view:ViewController,public servicio:ServiciosProvider, public loadingCtrl: LoadingController) {}

	ionViewDidLoad() {
		
	}
	  
	cargarCursosParaHorario() {
        this.servicio.getServCursosParaHorario()
        .subscribe(
            (data) => { this.cursos = data; },
            (error) => { console.log(error); }
        );
    }

}
