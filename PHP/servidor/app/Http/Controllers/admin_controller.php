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

    public function cerrar_sesion(Request $request) {



    }

    public function registrar_usuario(Request $request) {

        $code = 0;
        $msg = "No se realizó ninguna acción.";

        $datos = array(
            'user'      => $_POST['user'],
            'password'  => $_POST['pass']
        );

        $modelo = new Usuario();

        if(count($modelo->get_usuario($datos)) > 0) {
            $code = 0;
            $msg = "El usuario ingresado ya existe en la base de datos.";
        }else{

            $datos['nombre'] = $_POST['nombre'];
            $datos['estado'] = 1;

            $ins_resp = $modelo->insert_usuario($datos);

            if($ins_resp != 0) {

                $admin_model = new Administrador();

                $inner_datos = array(
                    'idUsuario' => $ins_resp,
                    'estado'    => 1
                );

                $admin_ins_resp = $admin_model->insert_administrador($inner_datos);

                if($admin_ins_resp) {

                    $code = 1;
                    $msg = "Usuario registrado correctamente.";

                    //Registro la variable de sesión
                    $request->session()->put('usuario_log', $datos['user']);

                }else{
                    $code = 2;
                    $msg = "Usuario creado.  No se pudo hacer administrador.";
                }

            }else{
                $code = 0;
                $msg = "No se pudo registrar el usuario.";
            }

        }

        $respuesta = array(
            'code' => $code,
            'message' => $msg
        );

        echo json_encode($respuesta);

    }

}
