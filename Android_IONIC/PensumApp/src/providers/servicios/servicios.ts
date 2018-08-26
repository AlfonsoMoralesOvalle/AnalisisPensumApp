import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
//import { HttpClientModule } from '@angular/common/http';
//import { HTTP } from '@ionic-native/http';

/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciosProvider {
    dominio = "https://vast-waters-26850.herokuapp.com"
    constructor(public helper:Http) {
        console.log('Hello ServiciosProvider Provider');
    }

    pensum : any
    //FUNCION ENCARGADA DE PODER TRAER EL PENSUM NECESARIO
    getPensum(idSemestre)
    {
        
        var url = this.dominio+"/api/get_obtenerCursosPensum";
        let postData = new FormData();
        postData.append('carnet','201503476');
        postData.append('idCarrera','09');
        postData.append('idSemestre',idSemestre);
        
        return this.helper.post(url, postData).map((res:Response)=>res.json());
    }

    //MARCA EL EL CURSO COMO ARPOBADO
    marcarAprobado(idSemestre, idCurso)
    {
        var url = this.dominio+"/api/pensum_asignarCursosAprobadosPensum";
        let postData = new FormData();
        postData.append('carnet','201503476');
        postData.append('idCarrera','09');
        postData.append('idCurso', idCurso);
        postData.append('idSemestre',idSemestre);
        return this.helper.post(url, postData).map((res:Response)=>res.json());
    }

    //DESMARCAR UN CURSO COMO APROBADO
    desmacarAprobado(idSemestre, idCurso)
    {
        var url = this.dominio+"/api/pensum_desasignarCursosAprobadosPensum";
        let postData = new FormData();
        postData.append('carnet','201503476');
        postData.append('idCarrera','09');
        postData.append('idCurso', idCurso);
        postData.append('idSemestre',idSemestre);
        return this.helper.post(url, postData).map((res:Response)=>res.json());
    }

    getResumenProgreso()
    {
        var url = this.dominio+"/api/obtenerProgresoDeLaCarrera";
        let postData = new FormData();
        postData.append('carnet','201503476');
        postData.append('idCarrera','09');
        return this.helper.post(url, postData).map((res:Response)=>res.json());
    }



}
