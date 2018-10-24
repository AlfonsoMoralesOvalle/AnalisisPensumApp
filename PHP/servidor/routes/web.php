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

Route::get  ('get_Cursos/'                ,'cursos_controller@getCursos');

Route::get('/Noticias', function () {
    return view('Noticias/nuevaNoticia');
});


Route::resource('nuevaNoticia','noticias_controller');
Route::get  ('get_Cursos/'                ,'cursos_controller@getCursos');

 



Route::get('/get_news','noticias_controller@index');
 
 
Route::post ('modificarNoticia/{id}'  ,'noticias_controller@modNoticia');


