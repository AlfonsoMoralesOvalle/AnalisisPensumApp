<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get ('get_cursos_horario','cursos_controller@get_cursos_horario');
Route::post ('post_agregar_curso_horario','cursos_controller@post_agregar_curso_horario');
Route::get ('get_horario','cursos_controller@get_horario');


//Pensum
Route::post('get_obtenerCursosPensum','pensum_controller@obtenerCursosPensum2');
Route::post('get_obtenerCursosPensum2','pensum_controller@obtenerCursosPensum');

Route::post('pensum_asignarCursosAprobadosPensum','pensum_controller@asignarCursosAprobadosPensum');
Route::post('pensum_desasignarCursosAprobadosPensum','pensum_controller@desasignarCursosAprobadosPensum');

Route::post('obtenerProgresoDeLaCarrera','pensum_controller@progresoCarrera');


/*
    **************************************************************************************************************************************
    * REGISTRO DE USUARIOS
    **************************************************************************************************************************************
*/

//Registro de Usuarios

    /*
    |--------------------------------------------------------------------------
    | get_obtenerCarreras
    |--------------------------------------------------------------------------
    | Retorna un Json con la siguiente información   
    |    [
    |        {
    |            "idCarrera": "58",
    |            "nombre": "INGENIERIA EN CIENCIAS Y SISTEMAS",
    |            "creditos": 250
    |        }
    |    ]
    |
    */

Route::get('get_obtenerCarreras', 'registroUsuarios_controller@obtenerCarreras'); 
    
    /*
    |--------------------------------------------------------------------------
    | post_registrarNuevoUsuario
    |--------------------------------------------------------------------------
    | #parametros que recibe
    |       carnet 
    |       usuario   Nota: puede ser el correo ya que es único
    |       nombre  
    |       password
    |       idCarrera
    |
    | #Si el Registro es Exitoso.
    |    {
    |        "respuesta": 1,
    |        "mensaje": "Se ha registrado el usuario con éxito"
    |    }
    |
    | #Si falla el registro
    |    {
    |        "respuesta": 0,
    |        "mensaje": "Ya existe un carnet asignado a la misma carrera, seleccione otra carrera"
    |    }
    | 
    */ 

Route::post('post_registrarNuevoUsuario', 'registroUsuarios_controller@registrarUsuario'); 


    /*
    |--------------------------------------------------------------------------
    | get_borrarTodosLosUsuarios
    |--------------------------------------------------------------------------
    | #Retorno
    |   "Se ha eliminado todos los usuarios con éxito"
    */ 
  
Route::get('get_borrarTodosLosUsuarios', 'registroUsuarios_controller@borrarTodosLosUsuarios');

/*
    **************************************************************************************************************************************
    * LOGIN
    **************************************************************************************************************************************
*/


    /*
    |--------------------------------------------------------------------------
    | post_login
    |--------------------------------------------------------------------------
    | #parametros que recibe
    |       usuario       Nota: puede ser el correo ya que es único
    |       password    
    |
    |
    | #Si es exitoso el Login. 
    |
    |    {
    |        "respuesta": 1,
    |        "carnet": "123",
    |        "idCarrera": "58",
    |        "mensaje": "Si existe el usuario."
    |    }
    |
    | #Si falla el login
    |    {
    |        "respuesta": 0,
    |        "carnet": "--",
    |        "idCarrera": "--",
    |        "mensaje": "Usuario y/o contraseña incorrecta"
    |    } 
    | 
    */ 
  
Route::post('post_login', 'login_controller@loginEstudiante');