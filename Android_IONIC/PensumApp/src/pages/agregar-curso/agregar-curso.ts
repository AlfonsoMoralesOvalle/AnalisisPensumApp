import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ServiciosProvider } from "../../providers/servicios/servicios";
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the AgregarCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-curso',
  templateUrl: 'agregar-curso.html',
})
export class AgregarCursoPage {
  
  cursos =[]
  cursos2 = [{"idCurso":1,"Nombre":"Compiladores 2","Creditos":5,"Prerequisito":3,"Postrequisito":90},{"idCurso":2,"Nombre":"Analisis y Dise\u00f1o 1","Creditos":5,"Prerequisito":4,"Postrequisito":34}]
  constructor(public navCtrl: NavController, public navParams: NavParams, private view:ViewController,public servicio:ServiciosProvider, public loadingCtrl: LoadingController) {
    this.cursos.push(navParams.get('cursos2'));
    console.log("jaja");
    console.log(navParams.get('cursos2'));
    console.log("jaja2");
  }
  
  ionViewDidLoad() {
    this.cargarcursos();
    console.log('ionViewDidLoad ProgresoPage');
    
    const loader = this.loadingCtrl.create({
      content: "Cargando...",
    });
    loader.present();
    setTimeout(() => {
     
      loader.dismiss();
    }, 2000);
  }

  refrescar(refresher) {

    setTimeout(() => {
      this.cargarcursos();
      refresher.complete();
    }, 1500);
    
  }

  //SE VA A ENCARGAR DE CERRAR EL MODAL
  cerrar()
  {
    this.view.dismiss();
  }

  cargarcursos()
  {

    this.servicio.getcursos().subscribe(data => {this.cursos.push(data)});
    console.log("mira");
    console.log(this.cursos);
    console.log("mira2");
  }

}
