package com.example.ricar.myapplication;
import java.util.ArrayList;

public class Hora {

    ArrayList<Curso> cursos; //CURSOS QUE HAY POR HORARIO
    String hora; //HORA DEL CURSO

    //CONSTRUCTOR DEL CURSO
    public Hora(String hora)
    {
        this.hora = hora;
        this.cursos = new ArrayList<>();
        //AGREGO LOS HORARIOS VACIOS
        for(int x = 0; x < 7; x++)
        {
            this.cursos.add(new Curso());
        }
    }

    //OBTIENE LA HORA
    public String getHora() {
        return hora;
    }

    //RETORNA EL CURSO
    public Curso gerCurso(int index)
    {
        return this.cursos.get(index);
    }
}

