<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Administrador extends Model
{

    public function insert_administrador($datos) {

        $admin = new Administrador;

        $admin->idUsuario   = $datos['idUsuario'];
        $admin->estado      = $datos['estado'];

        $admin->save();

        if($admin->id != 0) {
            return TRUE;
        }else{
            return FALSE;
        }

    }

}