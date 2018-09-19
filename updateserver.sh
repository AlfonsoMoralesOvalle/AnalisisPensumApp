#!/bin/bash

git pull origin develop 
sudo rm /var/www/html/servidor
sudo cp -R /PHP/servidor /var/www/html/
sudo cp /home/javier_barreda94/.env /var/www/html/servidor/
cd /var/www/html/servidor
sudo composer install 
sudo chown www-data:www-data -R /var/www/html/servidor/
sudo php artisan make:migration
#para cargar los datos a la DB
sudo php artisan db:seed --class=catedraticos
sudo php artisan db:seed --class=cursos
sudo php artisan db:seed --class=carreras
