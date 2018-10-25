import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LogInPage } from "../pages/log-in/log-in";
import { ProgresoPage } from "../pages/progreso/progreso";
import { VerPensumPage } from "../pages/ver-pensum/ver-pensum";
import { RegistroPage } from "../pages/registro/registro";
import { NoticiasPage } from "../pages/noticias/noticias";
//import { AgregarCursoPage } from "../pages/agregar-curso/agregar-curso";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiciosProvider } from '../providers/servicios/servicios';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { EjemploProvider } from '../providers/ejemplo/ejemplo';
import { HttpModule } from '@angular/http';
import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LogInPage,
    ProgresoPage,
    VerPensumPage,
    RegistroPage,
    NoticiasPage
    //AgregarCursoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LogInPage,
    ProgresoPage,
    VerPensumPage,
    RegistroPage,
    NoticiasPage
    //AgregarCursoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiciosProvider,
    UserServiceProvider,
    EjemploProvider
  ]
})
export class AppModule {}
