package Clases;

public class Curso {

    String nombre; //NOMBRE DEL CURSO
    String horario; //CADENA DEL HORARIO
    String edificio; //EDIFICIO DONDE SE IMPARTE
    String salon; //SALON DEL CURSO
    boolean ocupado; //SOLO PARA SABER QUE SI ESTA OCUPADO EL CURSO


    //CONSTRUCTOR DEL CURSO CUANDO ESTE OCUPADO
    public Curso(String nombre, String horario, String edificio, String salon)
    {
        this.nombre = nombre;
        this.horario = horario;
        this.edificio = edificio;
        this.salon = salon;
        this.ocupado = true;
    }

    //CONSTRUCTOR DEL CURSO CUANDO NO ESTE OCUPADO
    public Curso()
    {
        this.nombre = "";
        this.horario = "";
        this.edificio = "";
        this.salon = "";
        this.ocupado = false;
    }

    public String getHorario() {
        return horario;
    }

    public String getNombre() {
        return nombre;
    }

    public String getEdificio() {
        return edificio;
    }

    public String getSalon() {
        return salon;
    }

    public boolean isOcupado() {
        return ocupado;
    }
}
