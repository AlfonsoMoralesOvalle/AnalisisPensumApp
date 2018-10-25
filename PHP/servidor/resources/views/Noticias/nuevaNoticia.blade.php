@extends('Noticias/masterNoticia')


@section('content')

 
    @if (\Session::has('success')) 
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Agregado!</strong> {{ \Session::get('success') }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
     @endif 
    <br/>
      <h4>Nueva noticia</h4><br/>
      <form method="post" action="{{url('nuevaNoticia')}}" enctype="multipart/form-data">
        @csrf
        <div class="row">
          <div class="col-md-4"></div>
          <div class="form-group col-md-4">
            <label for="Titulo">Titulo:</label>
            <input type="text" class="form-control" name="titulo">
          </div>
        </div>
        <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="Texto">Contenido:</label>
              <textarea rows="4" cols="50" class="form-control" name="texto"></textarea>
            </div>
          </div> 
        <div class="row">
          <div class="col-md-4"></div>
          <div class="form-group col-md-4" style="margin-top:60px">
            <button type="submit" class="btn btn-success">Enviar</button>
          </div>
        </div>
      </form> 
       

@endsection