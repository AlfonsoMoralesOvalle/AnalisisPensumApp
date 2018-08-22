import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosProvider } from "../../providers/servicios/servicios";
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the VerPensumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-pensum',
  templateUrl: 'ver-pensum.html',
})
export class VerPensumPage {
  semes = 1
  semestre =  [
    {
      "numCreditos" : 0,
      "numAprobados": 0,
      "porcentaje":0
    }
  ]
  mensaje : string
  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio:ServiciosProvider, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerPensumPage');
    //this.recargar(500);
    this.cargaElPensumSemstre(this.semes);
  }

  cargaElPensumSemstre(idSemestre)
  {
    this.recargar(950);
    this.servicio.getPensum(idSemestre).subscribe(data => {this.semestre = data});
    console.log(this.semestre);
    
  }

  recargar(tiempo)
  {
    let loading = this.loadingCtrl.create({
      content: 'Espera...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      console.log("finalizado!");
    }, tiempo);
  }

  marcar(idCurso, idSemestre)
  {
    this.recargar(300);
    this.servicio.marcarAprobado(idSemestre, idCurso).subscribe(
      data=> {this.presentToast(2000,data)},
      error=> {this.presentToast(2000,"Error, no se pudo completar transaccion!")}
    );
    this.cargaElPensumSemstre(idSemestre);

  }

  desmarcar(idCurso, idSemestre)
  {
    this.recargar(300);
    this.servicio.desmacarAprobado(idSemestre, idCurso).subscribe(
      data=> {this.presentToast(2000,data)},
      error=> {this.presentToast(2000,"Error, no se pudo completar transaccion!")}
    );
    this.cargaElPensumSemstre(idSemestre);
  }

  presentToast(tiempo, mensaje) {
    const toast = this.toastCtrl.create({
      message: mensaje,
      duration: tiempo
    });
    toast.present();
  }
}
