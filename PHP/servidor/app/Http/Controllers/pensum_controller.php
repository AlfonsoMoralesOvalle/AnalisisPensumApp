<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\asignacioncurso;
use App\cursosaprobado;

class pensum_controller extends Controller
{
     

    public function obtenerCursosPensum(Request $request){
        $carnet=$request->get('carnet');
        $idSemestre=$request->get('idSemestre');
        $idCarrera=$request->get('idCarrera');

        error_log("[pensum_controller]obtenerCursosPensum");
        //$idSemestre=2;

        $items = DB::table('carreracursos') 
            ->join('cursos', 'cursos.idCurso', '=', 'carreracursos.idCurso') 
            ->where('carreracursos.semestre','=',$idSemestre) 
            ->select( 'cursos.idCurso','cursos.nombreCurso as Nombre','carreracursos.creditos') 
            ->get();
        foreach ($items as $key => $value) {
            $value->asignado=false;
            $value->posrequisito=rand(2,1000);
        }

        error_log("[/pensum_controller]obtenerCursosPensum");
        return response()->json($items);
    } 

    public function obtenerCursosPensum2(Request $request){
        error_log("[pensum_controller]obtenerCursosPensum2");
        $carnet=$request->get('carnet');
        $idSemestre=$request->get('idSemestre');
        $idCarrera=$request->get('idCarrera');

        
        //$idSemestre=2;

        error_log("\tcarnet:".$carnet);
        error_log("\tidCarrera:".$idCarrera);
        error_log("\tidSemestre:".$idSemestre);

        $carnet="20152015";
        $idCarrera="58"; 



        $aprobado=DB::table('cursosaprobados')
            ->where('cursosaprobados.idCarrera','=',$idCarrera)
            ->where('cursosaprobados.carnet','=',$carnet)
            ->select('cursosaprobados.idCurso')
            ->get();

        $noIncluir = array();

        foreach ($aprobado as $key => $value) {
            $noIncluir[]=$value->idCurso;
            //error_log($value->idCurso);
        }


        $noAprobados = DB::table('carreracursos') 
        ->join('cursos', 'cursos.idCurso', '=', 'carreracursos.idCurso') 
        ->where('carreracursos.semestre','=',$idSemestre) 
        ->where('carreracursos.idCarrera','=',$idCarrera) 
        ->whereNotIn('carreracursos.idCurso', $noIncluir)
        ->select( 'cursos.idCurso','cursos.nombreCurso as Nombre','carreracursos.creditos',DB::raw('"false" as asignado')) 
        ;

        $aprobados = DB::table('carreracursos') 
        ->join('cursos', 'cursos.idCurso', '=', 'carreracursos.idCurso') 
        ->where('carreracursos.semestre','=',$idSemestre) 
        ->where('carreracursos.idCarrera','=',$idCarrera) 
        ->whereIn('carreracursos.idCurso', $noIncluir)
        ->select( 'cursos.idCurso','cursos.nombreCurso as Nombre','carreracursos.creditos',DB::raw('"true" as asignado')) 
        ;

        $retorno=$noAprobados->union($aprobados)->get();


        foreach ($retorno as $key => $value) {
            if($value->asignado=="true"){
                $value->asignado=true;
            }else{
                $value->asignado=false;
            }
            
            $value->posrequisito=rand(2,1000);
        }

        error_log("[/pensum_controller]obtenerCursosPensum2");
        return response()->json($retorno);
    } 


    public function asignarCursosAprobadosPensum(Request $request){
        
        error_log("[pensum_controller]asignarCursosAprobadosPensum");
        $carnet=$request->get('carnet');
        $idCarrera=$request->get('idCarrera'); 
        $idCurso=$request->get('idCurso');
        $idSemestre=$request->get('idSemestre');

        error_log("\tcarnet:".$carnet);
        error_log("\tidCarrera:".$idCarrera);
        error_log("\tidCurso:".$idCurso);
        error_log("\tidSemestre:".$idSemestre);

        $carnet="20152015";
        $idCarrera="58"; 
        $nombreSeccion="A"; 
     
            $item = new cursosaprobado([
                'carnet' => $carnet,
                'idCurso' => $idCurso,
                'idCarrera'=>$idCarrera,
                'idSemestre' => $idSemestre
            ]);
            

            cursosaprobado::where('carnet', '=', $carnet)
                        ->where('idCurso', '=', $idCurso)
                        ->where('idCarrera', '=', $idCarrera)
                        ->delete();

 
       
            $item->save(); 
        
        error_log("[/pensum_controller]asignarCursosAprobadosPensum");
        return response()->json("Asignación de cursos aprobados exitosa! :)");
    }

    public function desasignarCursosAprobadosPensum(Request $request){
        
        error_log("[pensum_controller]desasignarCursosAprobadosPensum");
        $carnet=$request->get('carnet');
        $idCarrera=$request->get('idCarrera'); 
        $idCurso=$request->get('idCurso');
        $idSemestre=$request->get('idSemestre');

        error_log("\tcarnet:".$carnet);
        error_log("\tidCarrera:".$idCarrera);
        error_log("\tidCurso:".$idCurso);
        error_log("\tidSemestre:".$idSemestre);

        $carnet="20152015";
        $idCarrera="58"; 
        $nombreSeccion="A"; 
       
            cursosaprobado::where('carnet', '=', $carnet)
                        ->where('idCurso', '=', $idCurso)
                        ->where('idCarrera', '=', $idCarrera)
                        ->delete();

 
        error_log("[/pensum_controller]desasignarCursosAprobadosPensum");
        return response()->json("Desasignación de cursos aprobados exitosa! :)");
    }


    public function progresoCarrera(Request $request){

        error_log("[pensum_controller]progresoCarrera");
        $carnet=$request->get('carnet');
        $idCarrera=$request->get('idCarrera'); 


        error_log("\tcarnet:".$carnet);
        error_log("\tidCarrera:".$idCarrera); 

        $carnet="20152015";
        $idCarrera="58"; 



        $aprobado=DB::table('cursosaprobados')
            ->where('cursosaprobados.idCarrera','=',$idCarrera)
            ->where('cursosaprobados.carnet','=',$carnet)
            ->select('cursosaprobados.idCurso')
            ->get();

        $incluir = array();

        foreach ($aprobado as $key => $value) {
            $incluir[]=$value->idCurso; 
        }

        $aprobados = DB::table('carreracursos') 
        ->join('cursos', 'cursos.idCurso', '=', 'carreracursos.idCurso') 
        ->where('carreracursos.idCarrera','=',$idCarrera) 
        ->whereIn('carreracursos.idCurso', $incluir)
        ;


        $totalCreditos=$aprobados->select( DB::raw('SUM(carreracursos.creditos) as totalCreditos'))->first(); 

        $porcentaje=intval($totalCreditos->totalCreditos)/2.5;

        $totalAprobados=$aprobados->select( DB::raw('COUNT(*) as totalAprobados'))->first();


        $retorno=array(
            "porcentaje"=>$porcentaje,
            "numCreditos"=>$totalCreditos->totalCreditos,
            "numAprobados"=>$totalAprobados->totalAprobados
        );
        
        error_log("[/pensum_controller]progresoCarrera");
        return response()->json($retorno);
    }
}
