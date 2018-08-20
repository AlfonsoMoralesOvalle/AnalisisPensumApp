import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EjemploProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EjemploProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EjemploProvider Provider');
  }


  //DATOS DE PRUEBA QUE VAN A SERVIR PARA LA VISTA
  obtenerIds()
  {
    var cursos = [
      {
        "idCurso":1,
        "Secciones":["A","B+","B-"]
      }
      ,
      {
        "idCurso":2,
        "Secciones":["N"]
      }
      ,
      {
        "idCurso":3,
        "Secciones":["N"]
      }
      ,
      {
        "idCurso":4,
        "Secciones":["N","A"]
      }
    ]
    return cursos;
  }

  obtenerCursosPorDia()
  {
    var lunes = [
      {
        "Hora": 7,
        "Cursos":[
          {
            "Id": 1,
            "Seccion": "B+",
            "Curso": "Compiladores 2",
            "Edificio": "T3"
          }
          ,
          {
            "Id":1,
            "Seccion":"A",
            "Curso": "Compiladores 2",
            "Edificio": "T3"
          }
        ]
      }
      ,
      {
        "Hora": 8,
        "Cursos":[
          {
            "Id":2,
            "Seccion":"A",
            "Curso": "Analisis y Diseno 1",
            "Edificio": "T3"
          }
          ,
          {
            "Id":3,
            "Seccion":"A",
            "Curso": "Seminario de Sistemas",
            "Edificio": "T3"
          }
        ]
      }
    ]
    return lunes;
  }

  obtenerCursosViernes()
  {
    var viernes = [
      {
        "Hora": 7,
        "Cursos":[
          {
            "Id": 1,
            "Seccion": "B+",
            "Curso": "Compiladores 2",
            "Edificio": "T3"
          }
          ,
          {
            "Id":1,
            "Seccion":"A",
            "Curso": "Compiladores 2",
            "Edificio": "T3"
          }
        ]
      }
      ,
      {
        "Hora": 8,
        "Cursos":[
          {
            "Id":4,
            "Seccion":"B",
            "Curso": "Arquitectura de Computadores 1",
            "Edificio": "T3"
          }
          ,
          {
            "Id":3,
            "Seccion":"B",
            "Curso": "Seminario de Sistemas",
            "Edificio": "T3"
          }
        ]
      }
    ]
    return viernes;
  }


}
