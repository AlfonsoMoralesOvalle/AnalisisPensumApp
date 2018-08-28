<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCursospostrsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cursospostrs', function (Blueprint $table) {
            $table->string('idCarrera');
            $table->string('idCurso');
            $table->string('idCursoPost');
            $table->primary(['idCarrera','idCurso','idCursoPost']);


            $table->boolean('estado')->default(true);

            $table->foreign('idCarrera')->references('idCarrera')->on('carreracursos');
            $table->foreign('idCurso')->references('idCurso')->on('carreracursos'); 
            $table->foreign('idCursoPost')->references('idCurso')->on('cursos'); 
            
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
        Schema::dropIfExists('cursospostrs');
    }
}
