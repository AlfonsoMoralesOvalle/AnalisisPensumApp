import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the VNoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v-noticia',
  templateUrl: 'v-noticia.html',
})
export class VNoticiaPage {
  datos : any;
  constructor(public navCtrl: NavController, private view:ViewController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad VNoticiaPage');
    this.datos = this.navParams.get('data');
    console.log(this.datos);
  }

  cerrar()
  {
    this.view.dismiss();
  }

}
