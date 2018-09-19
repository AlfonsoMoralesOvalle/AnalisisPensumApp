<?php

use Illuminate\Database\Seeder;

class carreras extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

      DB::table('carreras')->insert([
            'idCarrera' => '58',
            'nombre' => "INGENIERIA EN CIENCIAS Y SISTEMAS", 
            'creditos' => 250
        ]);

    }
}
