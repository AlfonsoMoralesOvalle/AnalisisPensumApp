import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController, ModalController } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/servicios/servicios';
/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  noticias : any;

  constructor(public navCtrl: NavController, private modal:ModalController, public loadingCtrl: LoadingController, public navParams: NavParams, public servicio:ServiciosProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasPage');
    
    const loader = this.loadingCtrl.create({
      content: "Cargando...",
    });

    loader.present();
  
      setTimeout(() => {
        loader.dismiss();
        // AQUI CARGO TODO LO DEL CONTENIDO
        this.servicio.getNoticias().subscribe(data=>{this.noticias = data});
      }, 3000);
  }

  verNoticia(texto, titulo, hora, fecha)
  {
    const datos = {
      text : texto,
      title : titulo,
      hour : hora,
      date : fecha
    }
    console.log(texto);
    const miModal = this.modal.create('VNoticiaPage',{data:datos});
    miModal.present();
  }

  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
      // AQUI COLOCO LO QUE HAGA AL FINALIZAR
      this.servicio.getNoticias().subscribe(data=>{this.noticias = data});
    }, 2000);
  }
}
