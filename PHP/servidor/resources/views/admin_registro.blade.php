<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="_base_url" content="{{ url('/') }}">
        <meta name="csrf-token" content="{!! csrf_token() !!}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Registro | AnalisisPensumApp</title>
        <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
        <script type="text/javascript" src="http://netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
        <link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
        <link href="http://pingendo.github.io/pingendo-bootstrap/themes/default/bootstrap.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-ex-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#"><span>AnalisisPensumApp</span></a>
                </div>
                <div class="collapse navbar-collapse" id="navbar-ex-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="{{ url('/panel-administrativo') }}">Inicio sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <br><br><br><br><br>
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="text-center text-primary">REGISTRO</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-md-offset-4">
                        <div id="registroAlerts" class="alert" style="display:none;">
                        </div>
                        <form role="form">
                            <div class="form-group">
                                <label class="control-label">Carnet</label>
                                <input class="form-control" placeholder="Ingresa tu carnet" type="text" id="_carnet" name="_carnet">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Nombre de usuario</label>
                                <input class="form-control" placeholder="Ingresa tu nombre de usuario" type="text" id="_usuario" name="_usuario">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Contraseña</label>
                                <input class="form-control" placeholder="Contraseña" type="password" id="_pass" name="_pass">
                            </div>
                            <button id="btnRegistrar" type="button" class="btn btn-block btn-primary">Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <br><br><br><br><br>
        <br><br><br><br><br>
        <footer class="section section-primary">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <h1>AnalisisPensumApp</h1>
                        <p>Análisis y Diseño de Sistemas 1
                            <br>Grupo #11
                            <br>USAC, 2018</p>
                    </div>
                    <div class="col-sm-6">
                        <p class="text-info text-right">
                            <br>
                            <br>
                        </p>
                        <div class="row">
                            <div class="col-md-12 hidden-lg hidden-md hidden-sm text-left">
                                <a href="#"><i class="fa fa-3x fa-fw fa-instagram text-inverse"></i></a>
                                <a href="#"><i class="fa fa-3x fa-fw fa-twitter text-inverse"></i></a>
                                <a href="#"><i class="fa fa-3x fa-fw fa-facebook text-inverse"></i></a>
                                <a href="#"><i class="fa fa-3x fa-fw fa-github text-inverse"></i></a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 hidden-xs text-right">
                                <a href="#"><i class="fa fa-3x fa-fw fa-instagram text-inverse"></i></a>
                                <a href="#"><i class="fa fa-3x fa-fw fa-twitter text-inverse"></i></a>
                                <a href="#"><i class="fa fa-3x fa-fw fa-facebook text-inverse"></i></a>
                                <a href="#"><i class="fa fa-3x fa-fw fa-github text-inverse"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <script type="text/javascript">

            $(document).ready(function(){

                var APP_URL = $('meta[name="_base_url"]').attr('content');

                $('#btnRegistrar').on('click', function(){

                    var carnet = $('#_carnet').val();
                    var pass = $('#_pass').val();
                    var nombre = $('#_usuario').val();

                    if(carnet != "" && pass != "" && nombre != ""){

                        $.ajax({
                            type: "POST",
                            url: APP_URL + "/registro-usuario",
                            data: {
                                user : carnet,
                                pass : pass,
                                nombre : nombre
                            },
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            beforeSend: function() {

                            },
                            success: function(data) {

                                var obj = $.parseJSON(data);

                                if(obj.code == 1) {
                                    
                                    var r = window.confirm('Usuario registrado correctamente');
                                    if (r == true) {
                                        location.reload();
                                    }
                                }else{
                                    $('#registroAlerts').html(obj.message).attr('class', 'alert text-center alert-danger').show().delay(4000).fadeOut();
                                }

                            }
                        });

                    }else{
                        $('#registroAlerts').html('Debes completar todos los campos').attr('class', 'alert text-center alert-danger').show().delay(4000).fadeOut();
                    }

                });

            });

        </script>
    </body>
</html>
