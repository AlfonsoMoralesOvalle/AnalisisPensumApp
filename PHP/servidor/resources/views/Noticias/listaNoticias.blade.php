<!-- index.blade.php -->
 

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Noticias  </title>
    
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
 
  </head>
  <body>

    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                <h2>Sección de noticias</h2>
                   
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>
 
                </div>
            </div>
        </nav>

    <div class="container">
    @if (\Session::has('success'))
    
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Mensaje!</strong> {{ \Session::get('success') }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
     @endif
    <br/>
    <br/>
      <h4>Lista de noticias</h4><br/>
      
    <table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Titulo</th>
        <th>Noticia</th>
        <th colspan="2">Action</th>
      </tr>
    </thead>
    <tbody>
     
      @foreach($noticias as $noticia) 
      <tr>
        <td>{{$noticia['id']}}</td>
        <td>{{$noticia['titulo']}}</td>
        <td>{{$noticia['texto']}}</td>
         
        <td><a href="{{action('noticias_controller@edit', $noticia['id'])}}"  class="btn btn-warning">Editar</a></td>
        <td><form action="{{action('noticias_controller@destroy', $noticia['id'])}}"  method="post">
            @csrf
            <input name="_method" type="hidden" value="DELETE">
            <button class="btn btn-danger" type="submit">Eliminar</button>
        </form></td> 
        </tr>
      @endforeach
    </tbody>
  </table>


  </body>
</html>


       