<?php

use function Stringy\create as s;

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
    return $router->app->version();
});

$router->get('/watcher', function() {
    $ch = curl_init('http://tplinklogin.net/userRpm/WlanStationRpm.htm');
    $ch_options = array(
        CURLOPT_REFERER => 'http://tplinklogin.net/',
        CURLOPT_HTTPAUTH => CURLAUTH_BASIC,
        CURLOPT_USERPWD => 'admin:admin',
        CURLOPT_RETURNTRANSFER => true
    );
    curl_setopt_array($ch, $ch_options);
    $result = s(curl_exec($ch));
    curl_close($ch);

    $wlanHostPara_start = $result->indexOf('var wlanHostPara');
    $wlanHostPara = explode(',', $result->between('(', ')', $wlanHostPara_start)->stripWhitespace());
    $total_clients = (int) $wlanHostPara[0];
    $page = (int) $wlanHostPara[1];
    $page_size = (int) $wlanHostPara[2];
    $client_params_count = (int) $wlanHostPara[4];

    $hostList_start = $result->indexOf('var hostList');
    $hostList = explode(',', $result->between('(', ')', $hostList_start)->stripWhitespace());
    $client_attrs = array('address', 'status', 'received', 'send', 'action');
    $hostList = array_chunk($hostList, $client_params_count);
    $hostList = array_slice($hostList, 0, min($total_clients, $page_size));
    $hostList = array_map(function($client) use ($client_attrs) {
        return array_combine($client_attrs, $client);
    }, $hostList);
    var_dump($hostList);
    $debug = '<pre>' . implode(' | ', $wlanHostPara) . '</pre>';
    $original = '<pre>' . strip_tags($result->htmlEncode()) . '</pre>';
    return $debug . '<br>' . $original;
});
