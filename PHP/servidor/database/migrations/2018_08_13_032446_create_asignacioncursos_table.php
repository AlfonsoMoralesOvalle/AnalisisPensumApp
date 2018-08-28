<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAsignacioncursosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('asignacioncursos', function (Blueprint $table) {
            $table->string('carnet');
            $table->string('idCurso');
            $table->integer('idSemestre');
            $table->string('nombreSeccion');
            $table->primary(['carnet','idCurso','idSemestre','nombreSeccion']);



            $table->boolean('aprobado')->default(false);

            $table->boolean('estado')->default(true);

            $table->foreign('carnet','idCurso','idSemestre','nombreSeccion')->references('carnet','idCurso','idSemestre','nombreSeccion')->on('estudiantes'); 
           /* $table->foreign('idCurso')->references('idCurso')->on('Secciones'); 
            $table->foreign('idSemestre')->references('idSemestre')->on('Secciones');
            $table->foreign('nombreSeccion')->references('nombreSeccion')->on('Secciones');*/

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('asignacioncursos');
    }
}
