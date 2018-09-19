<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Usuario;
use App\Estudiante;
use App\asignacionCarrera;
use Illuminate\Support\Facades\DB;


class login_controller extends Controller
{

    
    /*
    |--------------------------------------------------------------------------
    | Login Estudiante
    |--------------------------------------------------------------------------
    | Usuario y contraseña
    |
    */


    public function loginEstudiante(Request $request){

        error_log("[login_controller]loginEstudiante");

        $usuario=$request->get('usuario');  
        $password=$request->get('password'); 


        $existeUsuario = DB::table('usuarios')
            ->where('user','=',$usuario)
            ->where('password','=',$password)
            ->get();
 

        if(count($existeUsuario) > 0)
        //Si esta registrado
        {
            $User = DB::table('usuarios')
            ->where('user','=',$usuario)
            ->where('password','=',$password)
            ->first();


            $carnet=$this->getCarnet($User->idUsuario);
            $idCarrera= $this->getCarrera($carnet);
             

            $retorno=array(
                'respuesta'=>1,
                'carnet'=>$carnet,
                'idCarrera' => $idCarrera, 
                'mensaje' => 'Si existe el usuario.'
            ); 

            //retorno un error de respuesta
            //throw new Exception('There is an error with this rating.');
            return response()->json($retorno);

        } else {
            
            $retorno=array(
                'respuesta'=>0,
                'carnet'=> '--',
                'idCarrera' => '--' ,
                'mensaje' => 'Usuario y/o contraseña incorrecta'
            ); 

            //retorno un error de respuesta
            //throw new Exception('There is an error with this rating.');
            return response()->json($retorno);
        }

        error_log("[/login_controller]loginEstudiante");
        return response()->json($items);
    } 


 

    public function getCarnet($idUsuario){

        $retorno="--";


        $estudiante = DB::table('estudiantes')
            ->where('idUsuario','=',$idUsuario)
            //->select('estudiantes.carnet')
            ->first();

        $retorno=$estudiante->carnet;

        return $retorno;
    } 

    public function getCarrera($idCarnet){


        $retorno="--";


        $carreras = DB::table('asignacion_carreras')
            ->where('carnet','=',$idCarnet)
            //->select('asigancion_carreras.idCarrera')
            ->first();

        $retorno=$carreras->idCarrera; 
        return $retorno;
    }
 
}
