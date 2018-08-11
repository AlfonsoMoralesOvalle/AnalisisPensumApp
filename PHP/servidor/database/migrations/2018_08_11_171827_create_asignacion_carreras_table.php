<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAsignacionCarrerasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('asignacion_carreras', function (Blueprint $table) {
            $table->string('carnet');
            $table->foreign('carnet')->references('carnet')->on('estudiantes'); 

            $table->string('idCarrera');
            $table->foreign('idCarrera')->references('idCarrera')->on('carreras'); 

            $table->primary(['carnet','idCarrera']);

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
        Schema::dropIfExists('asignacion_carreras');
    }
}
