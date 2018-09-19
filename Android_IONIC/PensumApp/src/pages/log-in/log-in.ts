import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { RegistroPage } from "../registro/registro";
import { AlertController } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {

  @ViewChild('usuario') usuario;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, public servicio:ServiciosProvider, public alertCtrl: AlertController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }

  //FUNCION PARA INGRESAR (AUN SIN AUTENTICACION)
  Ingresar()
  {
    if(this.usuario.value == "" || this.password.value == "")
    {
      this.mensaje("Campos son necesarios!", "Requeridos");
    }
    else
    {
      var mens
      this.servicio.realizarLogIn(this.usuario.value,  this.password.value).subscribe(data=>{mens = data});
      const loader = this.loadingCtrl.create({
        content: "Cargando...",
      });

      loader.present();
  
      setTimeout(() => {
        loader.dismiss();
        if(mens.respuesta == 1)
        {
          this.navCtrl.push(HomePage);
        }
        else
        {
          this.mensaje(mens.mensaje, "error");
        }
      }, 3000);

      
    }
  }

  Registrar()
  {
    this.navCtrl.push(RegistroPage);
  }

  mensaje(mens, titulo)
  {
    const alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mens,
      buttons: ['OK']
    });
    alert.present();
  }
}
