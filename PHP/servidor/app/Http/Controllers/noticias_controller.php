<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\noticia; 
use Illuminate\Support\Facades\DB;

class noticias_controller extends Controller
{ 

    /*
    |--------------------------------------------------------------------------
    | Registrar Noticia
    |--------------------------------------------------------------------------
    | Se guardará la nueva noticia
    |
    */

    public function store(Request $request)
    {  
        $noticia = new noticia([
            'titulo' => $request->get('titulo'),
            'texto' => $request->get('texto'),
            'fecha' => date("Y-m-d"),
            'hora'=>date("H:i:s")
        ]);
 
        $noticia->save();  
        
       return redirect('get_news')->with('success','La nueva noticia fue agregada con éxito'); 
    }



    /*
    |--------------------------------------------------------------------------
    | [API]Retornar todas las Noticias
    |--------------------------------------------------------------------------
    | Listado de todas las noticias
    |
    */

    public function getNoticias(){
        error_log("noticias");
        $news = DB::table('noticias')
            ->select('titulo','texto','hora','fecha')
            ->get();

        return response()->json($news); 
    }



    /*
    |--------------------------------------------------------------------------
    | [VISTA]Mostrar en la página la lista de noticias
    |--------------------------------------------------------------------------
    | Listado de todas las noticias pero en la vista listaNoticias
    |
    */

    public function index(){
        $noticias=\App\noticia::all();
        return view('Noticias/listaNoticias',compact('noticias'));
    }


    

    /*
    |--------------------------------------------------------------------------
    | Eliminar noticia
    |--------------------------------------------------------------------------
    | Se recibe el id de la noticia y se elimina
    |
    */

    public function destroy($id)
    {
        error_log($id); 
       $noticia =noticia::find($id);
       $noticia->delete();
       return redirect('get_news')->with('success','Noticia eliminada con éxito');
    }

    /*
    |--------------------------------------------------------------------------
    | [VISTA]Editar noticia 
    |--------------------------------------------------------------------------
    | Se recibe el id de la noticia a modificar y se redirecciona a la vista para editarla 
    |
    */

    public function edit($id)
    {
        $noticia =noticia::find($id);
        return view('Noticias/editarNoticia',compact('noticia','id'));
    }
    /*
    |--------------------------------------------------------------------------
    | Update noticia
    |--------------------------------------------------------------------------
    | Se recibe el id de la noticia a modificar y se redirecciona a la vista donde se listan las vistas
    |
    */ 
    public function modNoticia(Request $request,$id)
    { 

        $noticia =noticia::find($id);
        $noticia->titulo=$request->titulo;
        $noticia->texto=$request->texto;
        $noticia->save();
        return redirect('get_news')->with('success','Noticia modificada con éxito'); 
    }
 
}
