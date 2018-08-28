import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarCursoPage');
  }

  //SE VA A ENCARGAR DE CERRAR EL MODAL
  cerrar()
  {
    this.view.dismiss();
  }

}
