- PHP version 7.4.19
- Node version 20.9 up

- clone the repository both api-url and app-url and put in one folder called `url-shortener` and put in laragon/www or xampp/htdocs path
- Local Database usage (Laragon) or Xampp
- Create a database called url-shortener
- Run the command php spark migrate to generate the tables in the database in `api-url` folder
- run the api-url using command `php spark serve` (Backend)
- run the app-rul using command `npm start` (FrontEnd)
