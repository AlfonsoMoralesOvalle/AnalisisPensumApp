<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class cursos_controller extends Controller
{


    public function get_cursos_horario(Request $request){

        $carnet = $request->get('carnet');

        error_log("[cursos_controller]get_cursos_horario");

        $items = DB::select(DB::raw("
            SELECT *
            FROM horarios h
            WHERE h.idCurso IN (
            	SELECT idCurso
            	FROM cursospostrs cp
            	WHERE cp.idCurso NOT IN (
            		SELECT ca.idCurso
            		FROM cursosaprobados ca
            		WHERE ca.carnet = ".$carnet."
            	)
            )
        "));

        error_log("[/cursos_controller]get_cursos_horario");

        return response()->json($items);

    }


    /*
     *****************************
     *  getCursos
     *      (
     *          carne,
     *          idCarrera
     *      )
     *
     *****************************
     */


    public function getCursosQuePuedeLlevar(){


        error_log("[cursos_controller]getCursosQuePuedeLlevar2");
        $retorno=
        array(
            array(
                "idCurso"=>1,
                "Nombre"=>"Compiladores 2",
                "Creditos"=>5,
                "Prerequisito"=>3,
                "Postrequisito"=>90
            ),
            array(
                "idCurso"=>2,
                "Nombre"=>"Analisis y Diseño 1",
                "Creditos"=>5,
                "Prerequisito"=>4,
                "Postrequisito"=>34
            ),
            array(
                "idCurso"=>3,
                "Nombre"=>"Estructura de Datos",
                "Creditos"=>5,
                "Prerequisito"=>234,
                "Postrequisito"=>54
            ),
            array(
                "idCurso"=>4,
                "Nombre"=>"Base de datos 1",
                "Creditos"=>1,
                "Prerequisito"=>67,
                "Postrequisito"=>34
            )

        );
        return response()->json($retorno);
    }

    public function getCursosQuePuedeLlevarPost(Request $request){
        error_log("--------celular------------------------");
        error_log($request->get('carnet'));
        $json=$request->get('json');
        $ar = json_decode($json);

        foreach ($ar as $key => $value) {
            error_log($value->idCurso);
            error_log($value->Nombre);
           error_log($value->asignado);
            error_log("---fin json---");
        }
         //error_log($json);
                 //$array = $json->all();
       /*  foreach ($json as $item) {
            error_log($value->idCurso);
           error_log($value->Nombre);
           error_log($value->asignado);
            error_log("-------------");
        } */



        error_log($request);
        $retorno=
        array(
                array(
                    "idCurso"=>1,
                    "Nombre"=>"Compiladores 2",
                    "Creditos"=>5,
                    "Prerequisito"=>3,
                    "Postrequisito"=>90
                ),
                array(
                    "idCurso"=>2,
                    "Nombre"=>"Analisis y Diseño 1",
                    "Creditos"=>5,
                    "Prerequisito"=>4,
                    "Postrequisito"=>34
                ),
                array(
                    "idCurso"=>3,
                    "Nombre"=>"Estructura de Datos",
                    "Creditos"=>5,
                    "Prerequisito"=>234,
                    "Postrequisito"=>54
                ),
                array(
                    "idCurso"=>4,
                    "Nombre"=>"Base de datos 1",
                    "Creditos"=>1,
                    "Prerequisito"=>67,
                    "Postrequisito"=>34
                )

        );
        error_log("[cursos_controller]getCursosQuePuedeLlevarPost");
        return response()->json($retorno);
    }
}
