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
    user : any;
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

    getcursos(){
        var url = "http://a83f1bba.ngrok.io/api/get_cursos_horario/?carnet=201213177";
        let postData = new FormData();
        return this.helper.get(url).map((res:Response)=>res.json());
    }

    postagregarcurso(seccion,idCurso){
        var url = "http://a83f1bba.ngrok.io/api/post_agregar_curso_horario";
        let postData = new FormData();
        postData.append('carnet','201213177');
        postData.append('id_curso',idCurso);
        postData.append('seccion',seccion);
        postData.append('semestre','1');
        return this.helper.get(url).map((res:Response)=>res.json());
    }

    gethorario(){
        var url = "http://a83f1bba.ngrok.io/api/get_horario/?carnet=201213177?semestre=1";
        let postData = new FormData();
        return this.helper.get(url).map((res:Response)=>res.json());
    }


    /*
     * METODO PARA OBTENER LOS CURSOS DE LA API
     * ME RETORNA LOS CURSOS PARA LA PANTALLA DE REGISTRO DE USUARIO
    */

    getListCourse()
    {
        var url = "http://35.227.70.30:8000/api/get_obtenerCarreras";
        return this.helper.get(url).map((res:Response)=>res.json());
    }

    /*
     * METODO PARA REALIZAR EL REGISTRO DE USUARIO
     * ME RETORNA UNA CONFIRMACION SI SE HIZO COMO DEBERIA
    */

    registroUsuario(carnet, usuario, nombre, password, idCarrera)
    {
        //var url = this.dominio + "/api/post_registrarNuevoUsuario";
        var url = "http://35.227.70.30:8000/api/post_registrarNuevoUsuario"
        let postData = new FormData();
        postData.append('carnet', carnet);
        postData.append('usuario', usuario);
        postData.append('nombre', nombre);
        postData.append('password', password);
        postData.append('idCarrera', idCarrera);
        return this.helper.post(url, postData).map((res:Response)=>res.json());
    }

    /*
     * METODO PARA REALIZAR EL LOGIN
    */

    realizarLogIn(usuario, password)
    {
        var url = "http://35.227.70.30:8000/api/post_login";
        let postData = new FormData();
        postData.append('usuario', usuario);
        postData.append('password', password);
        return this.helper.post(url, postData).map((res:Response)=>res.json());
    }
    
    /**
     * METODO QUE GUARDA LA INFORMACION DEL USUARIO
     */
    saveUser(carnet, carrera, usuario2)
    {
        this.user = new usuario(carnet, carrera, usuario2);
    }

    /**
     * METODO QUE DEVUELVE EL USUARIO
     */
    getUser(){
        return this.user;
    }
    
    /**
     * METODO QUE VA A TRAER TODAS LAS NOTICIASS DE LA FACULTAD 
     */
    getNoticias()
    {
        var url = "http://35.227.70.30:8000/api/get_news";
        return this.helper.get(url).map((res:Response)=>res.json());
    }

}

class usuario 
{
    carnet: 0;
    idCarrera: 0;
    usuario : "";

    constructor(carnet, idcarrera, usuario)
    {
        this.carnet = carnet;
        this.idCarrera = idcarrera;
        this.usuario = usuario;
    }
}
