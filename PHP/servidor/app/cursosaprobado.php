<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class cursosaprobado extends Model
{
   
    protected $fillable = 
    [
        'carnet', 
        'idCurso', 
        'idCarrera', 
        'idSemestre'
    ]; 
}

