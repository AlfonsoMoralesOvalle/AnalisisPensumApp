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

}