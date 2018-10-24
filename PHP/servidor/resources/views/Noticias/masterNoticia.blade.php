 
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
        <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="{{ url('/') }}" >Inicio <span class="sr-only">(current)</span></a>
                    </li> 
                    <li class="nav-item active">
                        <a  class="btn btn-link" href="{{ url('/get_news') }}" role="button">Noticias</a> 
                    </li>   
                </ul>
                <div class="form-inline my-2 my-lg-0">  
                    <button type="button" class="btn btn-link">Cerrar Sesión</button>
                </div>
            </div>
        </nav>
 
        <div class="section">
        <div class="container"> 
        @yield('content')
        </div>
        </div>
 
    </div>

  </body>
</html>