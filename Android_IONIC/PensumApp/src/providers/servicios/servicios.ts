import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciosProvider {

    constructor(public http: HttpClient) {
        console.log('Hello ServiciosProvider Provider');
    }

    obtenerHorario(){
        return this.http.get('https://api.myjson.com/bins/ldkks');
    }

}
