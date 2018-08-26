<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class asignacioncurso extends Model
{
    protected $fillable = 
    [
        'carnet', 
        'idCurso', 
        'idSemestre', 
        'nombreSeccion', 
        'aprobado'
    ]; 
}
