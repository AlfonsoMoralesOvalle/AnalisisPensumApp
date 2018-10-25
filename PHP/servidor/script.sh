#!/bin/bash
sudo git reset --hard
sudo git checkout ft_joseph_ricardo
sudo git pull

#Actualizando db 
sudo composer dump-autoload
sudo php artisan migrate:refresh
sudo php artisan db:seed
sudo php artisan db:seed --class=catedraticos
sudo php artisan db:seed --class=cursos
sudo php artisan db:seed --class=carreras
sudo php artisan db:seed --class=carreracursos
sudo chmod 777 -R script.sh