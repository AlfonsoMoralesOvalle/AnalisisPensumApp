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

    public function inicio_sesion(Request $request) {

        $code = 0;
        $msg = "No se realizó ninguna acción.";

        $datos = array(
            'user'      => $_POST['user'],
            'password'  => $_POST['pass']
        );

        $modelo = new Usuario();

        if(count($modelo->get_usuario($datos)) > 0) {
            $code = 1;
            $msg = "Usuario logueado correctamente";

            //Registro la variable de sesión
            $request->session()->put('usuario_log', $datos['user']);

        }else{
            $code = 0;
            $msg = "Usuario no existe en la base de datos de administradores";
        }

        $respuesta = array(
            'code' => $code,
            'message' => $msg
        );

        echo json_encode($respuesta);

    }

}
