<?php

namespace Api\Helper;

class Request 
{
    public $uri;

    function __construct()
    {
        $this->uri = $_SERVER['REQUEST_URI'];
        
    }

    public function path(): string
    {
        if( $this->uri ){
            if( false !== stripos($this->uri, "/api" ) ){
                return $this->uri = str_replace("/api//", "", $this->uri);
            }
        }
    }

    public static function endpoint(): string
    {
        return implode( "/", array_slice( explode( "/", (new self)->path() ), 2 )  );
    }

    


}