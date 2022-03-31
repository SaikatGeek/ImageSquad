<?php
namespace Api\Helper;

class Controller
{
    function __construct()
    {
        
    }

    public static function __callStatic($name, $arguments)
    {
        echo "\n";
        var_dump($name);
        var_dump($arguments);
    }
}