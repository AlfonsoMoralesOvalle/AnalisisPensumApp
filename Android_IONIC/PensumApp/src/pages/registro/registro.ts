import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  /*HARE REFERENCIA A LOS CAMPOS*/
  @ViewChild('nombre') nombre ;
  @ViewChild('email') email ;
  @ViewChild('password') password ;
  @ViewChild('carnet') carnet ;
  carrera:string = "";

  cursos:any;
  constructor(public navCtrl: NavController, public servicio:ServiciosProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
    const loader = this.loadingCtrl.create({
      content: "Cargando...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000);
    this.servicio.getListCourse().subscribe(data => {this.cursos = data})
    console.log(this.cursos);
  }

  /*METODO QUE ACTUALIZA LA CARRERA*/
  update(carrera)
  {
    this.carrera = carrera;
  }

  /*METODO QUE HACE LA LLAMADA AL REGISTRO*/
  registrar()
  {
    if(this.carnet.value == "" || this.email.value == "" || this.carrera == "" || this.password.value == "" || this.nombre.value == "")
    {
      this.mensaje("todos los campos son requeridos", "Requerido!");
    }
    else
    {
      var mens;
      this.servicio.registroUsuario(this.carnet.value, this.email.value,this.nombre.value, this.password.value, this.carrera).subscribe(data=>{mens= data});
      const loader = this.loadingCtrl.create({
        content: "Realizando Registro...",
      });
      loader.present();
  
      setTimeout(() => {
        loader.dismiss();
        this.mensaje(mens.mensaje,"Respuesta");
        mens = null;
      }, 3000);
    }

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
