# setup
 link demo : http://test-spa-laravel.kendemo.com/ 



### docker
cd docker </br>
and run : docker-compose up -d

### composer
run: docker exec -it php bash </br>
run : composer install </br>

### config .env
cp .env.example .env </br>
edit .env file </br>
run : php artisan config:cache </br>
run : php artisan migrate:refresh --seed </br>
run : exit </br>

### react
cd src </br>
npm i </br>
npm run dev










