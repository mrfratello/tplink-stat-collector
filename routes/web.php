<?php


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return file_get_contents(resource_path('index.html'));
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('watcher', 'WatcherController@getStat');

    $router->get('address', 'AddressController@list');
});
