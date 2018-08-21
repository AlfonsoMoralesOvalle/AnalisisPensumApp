<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class cursos_controller extends Controller
{
   

    public function getCursos(){

        $retorno=
        array(
                "lunes"=>array(
                            array(
                                "Hora"=> 7,
                                "Cursos"=>
                                    array(
                                        array(
                                            "Id"=>1,
                                            "Seccion"=> "B+",
                                            "Curso"=>"Compiladores 2",
                                            "Edificio"=>"T3"
                                        ),
                                        array(
                                            "Id"=>1,
                                            "Seccion"=> "A",
                                            "Curso"=>"Compiladores 2",
                                            "Edificio"=>"T3"
                                        )
                                    )
                            ),
                            array(
                                "Hora"=> 8,
                                "Cursos"=>
                                    array(
                                        array(
                                            "Id"=>2,
                                            "Seccion"=> "A",
                                            "Curso"=>"Analisis y Diseño",
                                            "Edificio"=>"T3"
                                        ),
                                        array(
                                            "Id"=>1,
                                            "Seccion"=> "A",
                                            "Curso"=>"Seminario de Sistemas",
                                            "Edificio"=>"T3"
                                        )
                                    )
                            ),
                )
            
        );
        return response()->json($retorno);
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

    
        error_log("[cursos_controller]getCursosQuePuedeLlevar");
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
                )
            
        );
        return response()->json($retorno);
    }

    public function getCursosQuePuedeLlevarPost(Request $request){
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
                )
            
        );
        return response()->json($retorno);
    }
}
