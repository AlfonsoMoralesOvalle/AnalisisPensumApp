import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EjemploProvider } from "../../providers/ejemplo/ejemplo";
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ServiciosProvider } from "../../providers/servicios/servicios";

/**
 * Generated class for the ProgresoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-progreso',
  templateUrl: 'progreso.html',
})
export class ProgresoPage {

  cursos: any
  semestre =[]
  data =[]
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public ej:EjemploProvider, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public servicio:ServiciosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgresoPage');
    
    const loader = this.loadingCtrl.create({
      content: "Cargando...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
      this.actualizaProgreso();
      this.cargaElPensumSemstre();
    }, 3000);

    //this.cargarCursos();
  }

  //ENCARGADO DE LA ACTUALIZACION DEL PROGRESO
  actualizaProgreso()
  {
    this.servicio.getResumenProgreso().subscribe(data => {this.data = data});
    console.log(this.data);
  }

  cargarCursos()
  {
    this.cursos = this.ej.getCursosQuePuedoSeguir();
  }

  refrescar(refresher) {

    setTimeout(() => {
      this.cargarCursos();
      this.actualizaProgreso();
      refresher.complete();
    }, 1500);
    
  }

  agregarInteresado(idcurso)
  {
    this.ej.agregarInteresado(idcurso);
  }

  quitarInteresado(idcurso)
  {
    this.ej.quitarDeInteresados(idcurso);
  }

  existe(idcurso)
  {
    return this.ej.existeInteresado(idcurso);
  }

  presentToast(mensaje) {
    const toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }


  cargaElPensumSemstre()
  {

    for(let i=1;i<11;i++){
      this.servicio.getPensum(i).subscribe(data => {this.semestre.push(data)});
    }
    console.log("hola");
    console.log(this.semestre);
    console.log("hola2");
  }
}
