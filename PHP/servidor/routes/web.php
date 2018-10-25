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
use Illuminate\Http\Request;

Route::get('nuNoticia', function () {
    return view('Noticias/nuevaNoticia');
});
Route::resource('nuevaNoticia','noticias_controller');
Route::get('/get_news','noticias_controller@index');
Route::post ('modificarNoticia/{id}'  ,'noticias_controller@modNoticia');
Route::get('get_Cursos', 'cursos_controller@get_cursos_horario');
Route::get('/', 'Admin_controller@index');
Route::get('panel-administrativo-registro', 'Admin_controller@registro_view');
Route::post('registro-usuario', 'Admin_controller@registrar_usuario');
Route::post('inicio-sesion', 'Admin_controller@inicio_sesion');
Route::get('cerrar-sesion', function (Request $request) {
    $request->session()->forget('usuario_log');
    $request->session()->flush();
    return redirect('/');
});
