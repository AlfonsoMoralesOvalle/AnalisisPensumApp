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


//Registro de Usuarios

Route::get('get_obtenerCarreras', 'registroUsuarios_controller@obtenerCarreras'); 
Route::post('post_registrarNuevoUsuario', 'registroUsuarios_controller@registrarUsuario'); 
Route::get('get_borrarTodosLosUsuarios', 'registroUsuarios_controller@borrarTodosLosUsuarios');

//Login
Route::post('post_login', 'login_controller@loginEstudiante');