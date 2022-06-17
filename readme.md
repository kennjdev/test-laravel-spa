setup
link demo : http://test-spa-laravel.kendemo.com/


cd docker 
and run : docker-compose up -d

run: docker exec -it php bash
run : composer install
cp .env.example .env
edit .env file

run : php artisan config:cache
run : php artisan migrate:refresh --seed
run : exit

#react
cd src 
npm i
npm run dev








