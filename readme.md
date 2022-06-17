# setup
 link demo : http://test-spa-laravel.kendemo.com/ 



### docker
cd docker 
and run : docker-compose up -d

### composer
run: docker exec -it php bash
run : composer install

### config .env
cp .env.example .env
edit .env file
run : php artisan config:cache
run : php artisan migrate:refresh --seed
run : exit

### react
cd src 
npm i
npm run dev










