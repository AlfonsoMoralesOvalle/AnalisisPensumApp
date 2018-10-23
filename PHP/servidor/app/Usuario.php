<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{

    public function get_usuario($datos) {

        $user = DB::table('usuarios')
            ->where([
                ['usuarios.user', '=', $datos['user']],
                ['usuarios.password', '=', $datos['password']],
            ])
            ->join('administradors', 'usuarios.idUsuario', '=', 'administradors.idUsuario')
            ->select('usuarios.*')
            ->get();

        return $user;

    }

    public function insert_usuario($datos) {

        $usuario = new Usuario;

        $usuario->user       = $datos['user'];
        $usuario->password   = $datos['password'];
        $usuario->nombre     = $datos['nombre'];
        $usuario->estado     = $datos['estado'];

        $usuario->save();

        if($usuario->id != 0) {
            return $usuario->id;
        }else{
            return FALSE;
        }

    }

}
