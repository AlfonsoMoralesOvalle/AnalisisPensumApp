<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('get_Cursos', 'cursos_controller@get_cursos_horario');
Route::get('panel-administrativo', 'Admin_controller@index');
Route::get('panel-administrativo-registro', 'Admin_controller@registro_view');
Route::post('registro-usuario', 'Admin_controller@registrar_usuario');
Route::post('inicio-sesion', 'Admin_controller@inicio_sesion');
Route::get('cerrar-sesion', 'Admin_controller@inicio_sesion');
