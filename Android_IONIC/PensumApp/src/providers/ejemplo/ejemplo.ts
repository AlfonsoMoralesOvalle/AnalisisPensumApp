import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the EjemploProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EjemploProvider {

  data : any;

  interesados = []
  constructor(public http: HttpClient) {
    console.log('Hello EjemploProvider Provider');
  }

  datos : any
  //POST DATA
  envioPorPost()
  {
   /* var url = "https://vast-waters-26850.herokuapp.com/api/post_obtenerCursosQuePuedeLlevar";
    let postData = new FormData();
    postData.append('carne','201503476');
    postData.append('idCarrera','09');
    this.data = this.http.post(url, postData);
    this.data.subscribe(data =>{
      console.log(data);
    });*/
    
    /*var url = "https://vast-waters-26850.herokuapp.com/api/obtenerCursosQuePuedeLlevar";
    this.data = this.http.get(url);
    this.data.subscribe(
      (data)=>{this.data = data; console.log(data);},
      (error)=>{console.log("error");}
    );*/
  }
  
  //OBTENIENDO LOS CURSOS QUE PUEDO SEGUR PARA LA VISTA DE QUE PUEDO SEGUIR
  getCursosQuePuedoSeguir()
  {
    
    var url = "https://vast-waters-26850.herokuapp.com/api/obtenerCursosQuePuedeLlevar";
    this.http.get(url).subscribe(data =>{
      this.datos = data;
    });
    
    return this.datos;
  }

  //PARA PODER LLEVAR EL CONTROL DE LOS CURSOS QUE YA DECIDI SEGUIR
  agregarInteresado(idCurso)
  {
    var bandera = false;
    this.interesados.forEach(function(value){
      if(value.idCurso == idCurso)
      {
        bandera = true;
      }
    });
    if(!bandera)
    {
      this.interesados.push({"idCurso":idCurso});
    }
    console.log(JSON.stringify(this.interesados));
  }

  existeInteresado(idCurso)
  {
    var bandera = false;
    this.interesados.forEach(function(value){
      if(value.idCurso == idCurso)
      {
        bandera = true;
      }
    });
    return bandera;
  }

  quitarDeInteresados(idCurso)
  {
    var index = 0;
    var aux = 0;
    this.interesados.forEach(function(value){
      if(value.idCurso == idCurso)
      {
        index = aux;
      }
      aux++;
    });
    this.interesados.splice(index, 1);
  }


}
