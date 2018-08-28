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

Route::get ('obtenerCursosQuePuedeLlevar'       ,'cursos_controller@getCursosQuePuedeLlevar');
Route::post ('post_obtenerCursosQuePuedeLlevar' ,'cursos_controller@getCursosQuePuedeLlevarPost');


//Pensum
Route::post('get_obtenerCursosPensum','pensum_controller@obtenerCursosPensum2');
Route::post('get_obtenerCursosPensum2','pensum_controller@obtenerCursosPensum');

Route::post('pensum_asignarCursosAprobadosPensum','pensum_controller@asignarCursosAprobadosPensum');
Route::post('pensum_desasignarCursosAprobadosPensum','pensum_controller@desasignarCursosAprobadosPensum');

Route::post('obtenerProgresoDeLaCarrera','pensum_controller@progresoCarrera');

