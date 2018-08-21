import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LogInPage } from "../pages/log-in/log-in";
import { ProgresoPage } from "../pages/progreso/progreso";
//import { AgregarCursoPage } from "../pages/agregar-curso/agregar-curso";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiciosProvider } from '../providers/servicios/servicios';
<<<<<<< HEAD
import { UserServiceProvider } from '../providers/user-service/user-service';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> a06be85251126d2781e9714d5c5dd0fc3f8132d0

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LogInPage,
    ProgresoPage
    //AgregarCursoPage
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    HttpClientModule,
    IonicModule.forRoot(MyApp)
=======
    IonicModule.forRoot(MyApp),
    HttpClientModule
>>>>>>> a06be85251126d2781e9714d5c5dd0fc3f8132d0
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LogInPage,
    ProgresoPage
    //AgregarCursoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiciosProvider,
    UserServiceProvider
  ]
})
export class AppModule {}
