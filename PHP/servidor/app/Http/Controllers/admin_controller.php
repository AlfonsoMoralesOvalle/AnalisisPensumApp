<?php

namespace App\Http\Controllers;

use App\Usuario;
use App\Administrador;
use Illuminate\Http\Request;

class Admin_controller extends Controller
{

    public function index(Request $request) {

        if($request->session()->has('usuario_log')) {
            return view('admin');
        }else{
            return view('admin_home');
        }

    }

    public function registro_view(Request $request) {

        if($request->session()->has('usuario_log')) {
            return view('admin');
        }else{
            return view('admin_registro');
        }

    }

}
