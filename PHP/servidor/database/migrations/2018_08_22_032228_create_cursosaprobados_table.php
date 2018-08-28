<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCursosaprobadosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cursosaprobados', function (Blueprint $table) {

            

            $table->string('carnet');
            $table->string('idCurso');
            $table->string('idCarrera'); 

            $table->integer('idSemestre')->unsigned()->nullable();

            $table->primary(['carnet','idCurso','idCarrera']);

            $table->foreign('idCurso','idCarrera')->references('idCurso','idCarrera')->on('carreracursos');
            $table->foreign('carnet')->references('carnet')->on('estudiantes');  


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
        Schema::dropIfExists('cursosaprobados');
    }
}
