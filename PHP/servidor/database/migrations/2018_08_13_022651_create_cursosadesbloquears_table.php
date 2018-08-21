<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCursosadesbloquearsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cursosadesbloquears', function (Blueprint $table) {
            $table->string('idCarrera');
            $table->string('idCurso');
            $table->string('cursoadesbloquear');
            $table->primary(['idCarrera','idCurso','cursoadesbloquear']);


            $table->boolean('estado')->default(true);

            $table->foreign('idCarrera')->references('idCarrera')->on('carreracursos');
            $table->foreign('idCurso')->references('idCurso')->on('carreracursos'); 
            $table->foreign('cursoadesbloquear')->references('idCurso')->on('cursos'); 
            
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
        Schema::dropIfExists('cursosadesbloquears');
    }
}
