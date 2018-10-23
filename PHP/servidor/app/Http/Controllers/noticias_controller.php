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
        error_log("Noticia guardada");
        return redirect('Noticias')->with('success', 'La nueva noticia fue agregada con éxito');
    }



    /*
    |--------------------------------------------------------------------------
    | Retornar todas las Noticias
    |--------------------------------------------------------------------------
    | Se guardará la nueva noticia
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
    | Mostrar en la página la lista de noticias
    |--------------------------------------------------------------------------
    | Listado de todas las noticias 
    |
    */

    public function index(){
        $passports=\App\noticia::all();
        return view('Noticias/listaNoticias',compact('passports'));
    }
 
 
}
