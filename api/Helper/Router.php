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

    private const LIMIT = 2; 

    private $Http ;

    public $RouteMap = [];

    function __construct()
    {

        self::$uri = $_SERVER["REQUEST_URI"];
        $this->corsProtection();
        
       
    }

    public function corsProtection(){
        header('Access-Control-Allow-Origin: * ');
        header('Access-Control-Allow-Methods: GET, PUT, POST');
        header('Access-Control-Max-Age: 1000');
        header('Access-Control-Allow-Headers: *');
    }

    public static function protocol()
    {

        return isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https://" : "http://";

    }

    public function checkSupportedMethod(string $name)
    {

        return $this->acceptVerb($name);

    }

    public function closureArgumentValidation($arguments): bool
    {

        return ($arguments[1] instanceof \Closure) 
            && is_callable($arguments[1]) 
            && !is_string($arguments[1]);

    }

    public function stringArgumentValidation($arguments): bool
    {

        return is_string($arguments[1]);

    }

    private function callStaticControllerPassFromRoute($name, $arguments){

        if( self::LIMIT === count($arguments) ){

            if( 
                $this->closureArgumentValidation($arguments) 
                || $this->stringArgumentValidation($arguments)
            ){
                return Controller::__callStatic($name, $arguments);
                
            }
            else{
                print("stop!");
                // return throw new error();
            }

        }
        else{
            // return throw new error(); // don't allow too much argument
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
