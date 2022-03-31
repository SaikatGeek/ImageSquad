<?php

namespace Api\Helper;

use Api\Helper\Request;
use Api\Helper\Controller;
use Api\Helper\Http;

class Router extends Http
{
    /**
     * The URI pattern the route responds to.
     *
     * @var string
     */
    private static String $uri;

    /**
     * Indicates the ssl status for this route.
     *
     * @var bool
     */

    private Bool $ssl = FALSE;

    private $Http ;

    function __construct()
    {
        self::$uri = $_SERVER["REQUEST_URI"];
                
       
    }

    public static function protocol()
    {
        return isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https://" : "http://";
    }

    public function checkSupportedMethod(string $name)
    {
        return $this->acceptVerb($name);
    }

    public function argumentValidation($name, $arguments): bool
    {
        return ($arguments[1] instanceof \Closure) 
            && is_callable($arguments[1]) 
            && !is_string($arguments[1]) 
            && is_string($arguments[0]);
    }

    private function callStaticControllerPassFromRoute($name, $arguments){
        if( $this->argumentValidation($name, $arguments) ){
            
            return Controller::__callStatic($name, $arguments);
        }
        else{
            // return throw new error();
        }
    }

    public static function __callStatic($name, $arguments)
    {
        $newSelf = new self;
        if( $newSelf->checkSupportedMethod( strtoupper($name) )){
            return $newSelf->callStaticControllerPassFromRoute($name, $arguments);
        }
        else{
            // return throw new error(); invalid http verb
        }
        
    }

      
}
