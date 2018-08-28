<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSeccionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('secciones', function (Blueprint $table) {
            $table->string('idCurso');
            $table->integer('idSemestre')->unsigned();
            $table->string('nombreSeccion');
            $table->primary(['idCurso','idSemestre','nombreSeccion']);
            $table->integer('idCatedratico')->unsigned();
            $table->boolean('estado')->default(true);
            $table->foreign('idCatedratico')->references('idCatedratico')->on('catedraticos');
            $table->foreign('idCurso')->references('idCurso')->on('cursos'); 
            $table->foreign('idSemestre')->references('idSemestre')->on('semestres');
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
        Schema::dropIfExists('secciones');
    }
}
