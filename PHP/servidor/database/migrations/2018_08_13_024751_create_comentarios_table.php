<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComentariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comentarios', function (Blueprint $table) {
            $table->integer('idCatedratico');
            $table->string('carnet');
            $table->primary(['idCatedratico','carnet']);


            $table->string('comentario');
            $table->integer('calificacion');

            $table->boolean('estado')->default(true);

            $table->foreign('idCatedratico')->references('idCatedratico')->on('catedraticos'); 
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
        Schema::dropIfExists('comentarios');
    }
}
