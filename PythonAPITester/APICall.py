import requests
import json

SERVER_URL = "http://35.227.70.30:8000/api/"

# METODO PARA LLAMAR A LA RUTA DE CARRERAS PARA EL REGISTRO
def testing_carreras_url():
    response = requests.get(SERVER_URL + "get_obtenerCarreras")
    return response.status_code


# METODO PARA LLAMAR A LA RUTA DE LLAMAR A LA RUTA QUE REGISTRA A LOS USUARIOS
def testing_registro_url():
    response = requests.post(SERVER_URL + "post_registrarNuevoUsuario", {"carnet":"201800464", "usuario":"ejemplo2@gmail.com", "nombre":"ejemplo2", "password":"123456789","idCarrera":"58"})
    return response.status_code


# METODO PARA LLAMAR A LA RUTA QUE REALIZA EL METODO DE LOGIN
def testing_login_url():
    response = requests.post(SERVER_URL + "post_login", {"usuario":"ejemplo2@gmail.com", "password":"123456789"})
    return response.status_code

# METODO QUE TESTEA LA RUTA DE LAS NOTICIAS DE LA FACULTAD
def testing_news_url():
    response = requests.get(SERVER_URL + "get_news")
    return response.status_code
