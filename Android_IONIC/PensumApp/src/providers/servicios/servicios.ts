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

    obtenerHorario() {

        var json_horario = {
            'curso' : 'Compiladores 2',
            'hora_inicio' : '7:00',
            'hora_fin' : '9:00',
            'seccion' : 'N',
            'catedratico' : 'Ing. Byron Lopez',
            'dias' : {
                'lunes' : true,
                'martes' : false,
                'miercoles' : false,
                'jueves' : false,
                'viernes' : true,
                'sabado' : false,
                'domingo' : false
            }
        };

        return json_horario;

    }

}
