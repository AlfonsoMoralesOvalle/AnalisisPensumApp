<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCarreracursosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carreracursos', function (Blueprint $table) {
            $table->string('idCarrera');
            $table->string('idCurso');
            $table->primary(['idCarrera','idCurso']);
            $table->boolean('obligatoria')->default(false);
            $table->integer('semestre')->unsigned();
            $table->integer('creditos')->unsigned();;
            
            $table->boolean('estado')->default(true);

            $table->foreign('idCarrera')->references('idCarrera')->on('carreras'); 
            $table->foreign('idCurso')->references('idCurso')->on('cursos'); 
           
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
        Schema::dropIfExists('carreracursos');
    }
}
