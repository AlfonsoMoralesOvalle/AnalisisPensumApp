@extends('Noticias/masterNoticia')


@section('content')

    @if (\Session::has('success'))
    
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Mensaje!</strong> {{ \Session::get('success') }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    @endif
    <br/> 

        
    
        <a  class="btn btn-primary" href="{{ url('/nuNoticia') }}" role="button">Nueva noticia</a>
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

@endsection