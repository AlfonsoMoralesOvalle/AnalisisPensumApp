<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Usuario;
use App\Estudiante;
use App\asignacionCarrera;

class registroUsuarios_controller extends Controller
{
    

    /*
    |--------------------------------------------------------------------------
    | Obtener Carreras
    |--------------------------------------------------------------------------
    | Se obtienen todas las carreras registradas, para que el usuario
    | a la hora de registrarse, seleccione una, y retorne el codigo de la 
    | carrera seleccionada 
    |
    */
    public function obtenerCarreras(){
         
        $items = DB::table('carreras')
        ->select('idCarrera','nombre','creditos')
            ->get();
 
        error_log("[/registroUsuarios_controller]obtenerCarreras");
        return response()->json($items);
    } 



    /*
    |--------------------------------------------------------------------------
    | Registrar usuarios
    |--------------------------------------------------------------------------
    | Se obtienen todas las carreras registradas, para que el usuario
    | a la hora de registrarse, seleccione una, y retorne el codigo de la 
    | carrera seleccionada 
    |
    */
    public function registrarUsuario(Request $request){
         

        error_log("[/registroUsuarios_controller]registrarUsuario");

        $carnet=$request->get('carnet'); 
        $usuario=$request->get('usuario'); 
        $nombre=$request->get('nombre'); 
        $password=$request->get('password'); 
        $idCarrera=$request->get('idCarrera');

 
        /*
        |--------------------------------------------------------------------------
        | Validaciones antes del registro
        |--------------------------------------------------------------------------
        */


        /*
        +-------------------------+
        |  Validando si existe la carrera
        */

        $existeCarrera=DB::table('carreras')  
            ->where('idCarrera','=',$idCarrera)
            ->get();

             
        if(count($existeCarrera)==0)
        //quiere decir que ya hay un usuario con el mismo nombre 
        {
            $retorno=array(
                'respuesta'=>0,
                'mensaje'=>'La carrera seleccionada no existe en la base de datos, seleccione una carrera registrada'
            );
            //retorno un error de respuesta
            //throw new Exception('There is an error with this rating.');
            return response()->json($retorno);
        }

        /*
        +-------------------------+
        |   También hay que validar que no esté el carne asociado a la misma carrera
        */

        $carrera_usuario=DB::table('asignacion_carreras') 
            ->where('carnet','=',$carnet)
            ->where('idCarrera','=',$idCarrera)
            ->get();

             
        if(count($carrera_usuario)>0)
        //quiere decir que ya hay un usuario con el mismo nombre 
        {
            $retorno=array(
                'respuesta'=>0,
                'mensaje'=>'Ya existe un carnet asignado a la misma carrera, seleccione otra carrera'
            );
            //retorno un error de respuesta
            //throw new Exception('There is an error with this rating.');
            return response()->json($retorno);
        }




        /*
        +-------------------------+
        |  Hay que validar si ya existe el usuario
        |
        */
 
        $usuarios=DB::table('usuarios')
            ->select('idUsuario')
            ->where('user','=',$usuario)
            ->get();


            
        if(count($usuarios)>0)
        //quiere decir que ya hay un usuario con el mismo nombre 
        {

            $retorno=array(
                'respuesta'=>0,
                'mensaje'=>'Ya existe un correo igual registrado, coloque otro correo'
            );
            //retorno un error de respuesta
            //throw new Exception('There is an error with this rating.');
            //return response()->json('Error al insertar el usuario');
            return response()->json($retorno);
        }

 
        /*
        |--------------------------------------------------------------------------
        | Registrando
        |--------------------------------------------------------------------------
        */
        /*
        +-------------------------+
        |   Registrando al usuario
        */

        $nuevoUsuario = new Usuario([
            'user' => $usuario,
            'password' => $password,
            'nombre'=>$nombre
        ]);


        $nuevoUsuario->save();
  

        /*
        +-------------------------+
        |   Registrando al estudiante
        */

        $nuevoEstudiante = new Estudiante([
            'carnet' => $carnet,
            'idUsuario' => $nuevoUsuario->id
        ]);

        $nuevoEstudiante->save();
 

        /*
        +-------------------------+
        |   asignandole la carrera
        */

        $asignacion=new asignacionCarrera([
            'carnet'=>$carnet,
            'idCarrera'=>$idCarrera
        ]);

        $asignacion->save();

 
        $retorno=array(
            'respuesta'=>1,
            'mensaje'=>'Se ha registrado el usuario con éxito'
        );
 
        error_log("[/registroUsuarios_controller]registrarUsuario");
        return response()->json($retorno);
    } 

    /*
    |--------------------------------------------------------------------------
    | Borrar Usuarios
    |--------------------------------------------------------------------------
    | Sirve para borrar todos los usuarios registrados del servidor
    |
    */
    public function borrarTodosLosUsuarios(){

        error_log("[registroUsuarios_controller]borrarTodosLosUsuarios"); 
        DB::table('asignacion_carreras')->delete();
        DB::table('estudiantes')->delete();
        DB::table('usuarios')->delete();
 
        error_log("[/registroUsuarios_controller]borrarTodosLosUsuarios");
        return response()->json("Se ha eliminado todos los usuarios con éxito");
    }



}
