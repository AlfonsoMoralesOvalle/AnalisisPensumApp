drop table cursosadesbloquears;
drop table cursosadesbloquears2;
drop table carreracursos;
drop table cursos;
drop table asignacion_carreras;
drop table carreras;
drop table catedraticos;
drop table semestres;
drop table salons;
drop table edificios;
drop table estudiantes;
drop table administradors;
drop table usuarios;
drop table migrations;
drop table users;
drop table password_resets;


 

INSERT INTO 
    cursos(idCurso,nombreCurso)
VALUES
    ('28','SOCIAL HUMANISTICA 1'),
    ('169','MATEMATICA BASICA 1'),

    ('29','SOCIAL HUMANISTICA 2'),
    ('170','MATEMATICA BASICA 2'),

    ('2795','MATE COMPUTO 1'),
    ('146','FISICA 1'),

    ('291','MATE INTERMEDIA 2'),
    ('292','MATE INTERMEDIA 3'),

    ('673','MATE APLICADA 1'),
    ('675','MATE APLICADA 3'), 

    ('2','TEORIA DE SISTEMAS 1'),
    ('4','ECONOMIA'),

    ('5','ESTADISTICA 2'),
    ('6','REDES 1'),

    ('7','SISTEMAS OPERATIVOS 2'),
    ('8','ANALISIS Y DISEÑO'),

    ('9','INTELIGENCIA ARTIFICIAL'),
    ('10','SEGURIDAD DE REDES'),

    ('11','SOFTWARE AVANZADO'),
    ('12','PLANEAMIENTO');

INSERT INTO 
    carreras (idCarrera,nombre, creditos)
VALUES
    ('58','INGENIERIA EN CIENCIAS Y SISTEMAS',250);
    

INSERT INTO 
    carreracursos (idCarrera,idCurso, obligatoria,semestre,creditos)
VALUES
    ('58','28',1,1,5),
    ('58','169',1,1,5),

    ('58','29',1,2,5),
    ('58','170',1,2,5),
    
    ('58','2795',1,3,5),
    ('58','146',1,3,5),
    
    ('58','291',1,4,5),
    ('58','292',1,4,5),
    
    ('58','673',1,5,5),
    ('58','675',1,5,5),
    
    ('58','2',1,6,5), 
    ('58','4',1,6,5),
    
    ('58','5',1,7,5),
    ('58','6',1,7,5),
    
    ('58','7',1,8,5), 
    ('58','8',1,8,5),
    
    ('58','9',1,9,5),
    ('58','10',1,9,5),
    
    ('58','11',1,10,5), 
    ('58','12',1,10,5);






INSERT INTO 
    usuarios (idUsuario,user, password,nombre)
VALUES
    (1,'truman','truman','truman');


INSERT INTO 
    estudiantes (carnet,idUsuario)
VALUES
    ('20152015',1);
    

INSERT INTO 
    asignacion_carreras (carnet,idCarrera)
VALUES
    ('20152015','58');

INSERT INTO 
    catedraticos (idCatedratico,nombre)
VALUES
    (1,'Luis Perez');

INSERT INTO 
    semestres (idSemestre,anio,numero)
VALUES
    (1,2015,1),
    (2,2015,2),
    (3,2015,3),
    (4,2015,4),
    (5,2015,5),
    (6,2015,6),
    (7,2015,7),
    (8,2015,8),
    (9,2015,9),
    (10,2015,10);


INSERT INTO 
    secciones (idCurso,idSemestre,nombreSeccion,idCatedratico)
VALUES
    ("2",1,"A",1);



    
