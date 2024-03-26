<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

//$routes->get('/', 'Home::index');
$routes->post('api/shorten-url', 'UrlController::shorten');
$routes->get('/(:segment)', 'UrlController::redirectToOriginalUrl/$1');


$routes->post('api/signup', 'AuthController::signUp');
$routes->post('api/signin', 'AuthController::signIn');
