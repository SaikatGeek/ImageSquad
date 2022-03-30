<?php

class Router {
    /**
     * The URI pattern the route responds to.
     *
     * @var string
     */
    private String $uri;

    /**
     * Indicates the ssl status for this route.
     *
     * @var bool
     */

    private Bool $ssl = FALSE;

    function __construct()
    {
        self::$uri = $_SERVER["REQUEST_URI"];

       
    }

    public static function protocol()
    {
        return isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https://" : "http://";
    }

    // public static function get()
    // {

    // }

    // public static function post()
    // {

    // }
}
