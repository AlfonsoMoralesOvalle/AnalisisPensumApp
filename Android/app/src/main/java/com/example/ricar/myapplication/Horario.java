package com.example.ricar.myapplication;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ListView;

import java.util.ArrayList;

public class Horario extends AppCompatActivity {

    ListView visor;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_horario);

        //OBTENIENDO EL LISTVIEW DE LA INTERFAZ
        visor = (ListView) findViewById(R.id.visorLista);

        /*******************************
         * PRUEBA DE VISTA
         * ****************************/
        Hora h1 = new Hora("07:00");
        Hora h3 = new Hora("08:00");
        Hora h4 = new Hora("09:00");
        Hora h5 = new Hora("10:00");

        //LISTA
        ArrayList<Hora> horas = new ArrayList<>();
        horas.add(h1);
        horas.add(h3);
        horas.add(h4);
        horas.add(h5);
    }
}
