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


    public function post_agregar_curso_horario(Request $request) {

        $carnet = $request->get('carnet');
        $id_curso = $request->get('id_curso');
        $seccion = $request->get('seccion');
        $id_semestre = $request->get('semestre');

        error_log("[cursos_controller]post_agregar_curso_horario");

        $id = DB::table('asignacioncursos')->insertGetId(
            [
                "carnet"        => $carnet,
                "idCurso"       => $id_curso,
                "idSemestre"    => $id_semestre,
                "nombreSeccion" => $seccion,
                "aprobado"      => 0,
                "estado"        => 1
            ]
        );

        error_log("[/cursos_controller]post_agregar_curso_horario");

        if(empty($id)){
            $respuesta = TRUE;
        }else{
            $respuesta = FALSE;
        }

        return response()->json($respuesta);

    }


    public function get_horario(Request $request) {

        $carnet = $request->get('carnet');
        $id_semestre = $request->get('semestre');

        error_log("[cursos_controller]get_horario");

        $items = DB::select(DB::raw("

            SELECT
                ac.carnet,
                ac.idCurso,
                ac.idSemestre,
                ac.nombreSeccion,
                h.hora,
                h.dia,
                h.idSalon,
                c.nombreCurso
            FROM asignacioncursos ac
            JOIN horarios h
            ON ac.idCurso = h.idCurso
            AND ac.nombreSeccion = h.nombreSeccion
            AND ac.idSemestre = h.idSemestre
            JOIN cursos c
            ON ac.idCurso = c.idCurso
            WHERE ac.carnet = ".$carnet."
            AND ac.idSemestre = ".$id_semestre."

        "));

        error_log("[/cursos_controller]get_horario");

        return response()->json($items);

    }



}
