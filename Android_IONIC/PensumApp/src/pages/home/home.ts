import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { ModalController } from "ionic-angular";
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { EjemploProvider } from "../../providers/ejemplo/ejemplo";
import { LocalNotifications } from '@ionic-native/local-notifications';
import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
    notifications: any[] = [];
    days: any[];
    horario
    
    constructor(public navCtrl: NavController, private modal: ModalController,public platform: Platform, public servicio:ServiciosProvider, public ej:EjemploProvider, public localNotifications: LocalNotifications) {
 
        this.days = [
            {title: 'Monday', dayCode: 1, checked: true},
            {title: 'Tuesday', dayCode: 2, checked: true},
            {title: 'Wednesday', dayCode: 3, checked: true},
            {title: 'Thursday', dayCode: 4, checked: true},
            {title: 'Friday', dayCode: 5, checked: true},
            {title: 'Saturday', dayCode: 6, checked: true},
            {title: 'Sunday', dayCode: 0, checked: true}
        ];
        this.addNotifications();

    }
    
    //ABRE EL MODAL PARA PODER AGREGAR UN CURSO NUEVO
    addCourse()
    {
        const nueva = this.modal.create('AgregarCursoPage');
        nueva.present();
    }

    cargarDatosDeDia(idDia)
    {
        
    }

    addNotifications(){
 
        let currentDate = new Date();
        let currentDay = currentDate.getDay(); // Sunday = 0, Monday = 1, etc.
     
        for(let day of this.days){
     
            if(day.checked){
     
                let firstNotificationTime = new Date();
                let dayDifference = day.dayCode - currentDay;
     
                if(dayDifference < 0){
                    dayDifference = dayDifference + 7; // for cases where the day is in the following week
                }
     
                firstNotificationTime.setHours(firstNotificationTime.getHours() + (24 * (dayDifference)));
                firstNotificationTime.setHours(20);
                firstNotificationTime.setMinutes(49);
     
                let notification = {
                    id: day.dayCode,
                    title: 'Advertencia!',
                    text: 'Te toca clases :)',
                    sound: this.setSound(),
                    at: firstNotificationTime,
                    every: 'week'
                };
                this.notifications.push(notification);
              
            }
     
        }
     
        console.log("Notifications to be scheduled: ", this.notifications);
        if(this.platform.is('cordova')){
 
            // Cancel any existing notifications
            this.localNotifications.cancelAll().then(() => {
     
                // Schedule the new notifications
                this.localNotifications.schedule(this.notifications);
     
                this.notifications = [];
            });
     
        }
     
    }


    setSound() {
        if (this.platform.is('android')) {
          return 'file://assets/sounds/plucky.mp3'
        } else {
          return 'file://assets/sounds/plucky.mp3'
        }
      }
}
