<?php

namespace App\Http\Controllers;

use function Stringy\create as s;

class WatcherController extends Controller
{
    private $JS_VAR_WLAN_HOST_PARA = "var wlanHostPara";
    private $JS_VAR_HOST_LIST = "var hostList";
    private $HOST_KEYS = array('address', 'status', 'received', 'send', 'action');

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     *
     */
    public function getStat()
    {
        $html = $this->getHtmlFromRouter();
        $this->parseParamsFromHtml($html);
        $this->parseAddessesFromHtml($html);
        echo '<pre>';
        var_dump($this->hosts);
        echo '</pre>';
        return 'Hello world';
    }

    private function getHtmlFromRouter()
    {
        $ch = curl_init('http://tplinklogin.net/userRpm/WlanStationRpm.htm');
        $ch_options = array(
            CURLOPT_REFERER => 'http://tplinklogin.net/',
            CURLOPT_HTTPAUTH => CURLAUTH_BASIC,
            CURLOPT_USERPWD => 'admin:admin',
            CURLOPT_RETURNTRANSFER => true
        );
        curl_setopt_array($ch, $ch_options);
        $html = s(curl_exec($ch));
        curl_close($ch);
        return $html;
    }

    private function parseParamsFromHtml($html)
    {
        $offset = $html->indexOf($this->JS_VAR_WLAN_HOST_PARA);
        $wlanHostPara = explode(',', $html->between('(', ')', $offset)->stripWhitespace());
        $total_clients = (int) $wlanHostPara[0];
        $page_size = (int) $wlanHostPara[2];
        $page = (int) $wlanHostPara[1]; //
        $this->client_params_count = (int) $wlanHostPara[4];
        $this->host_counts = min($total_clients, $page_size);
    }

    private function parseAddessesFromHtml($html)
    {
        $offset = $html->indexOf('var hostList');
        $host_list = explode(',', $html->between('(', ')', $offset)->stripWhitespace());
        $host_list = array_chunk($host_list, $this->client_params_count);
        $host_list = array_slice($host_list, 0, $this->host_counts);
        $host_list = array_map(function($client)  {
            return array_combine($this->HOST_KEYS, $client);
        }, $host_list);
        $this->hosts = $host_list;
    }
    //use ($client_attrs)
}
