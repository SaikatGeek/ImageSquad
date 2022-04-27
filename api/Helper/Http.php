<?php

namespace Api\Helper;

class Http
{
    public static $verbs = ['GET', 'POST', 'PUT'];

    function __construct()
    {
    }

    private function getHttpVerb()
    {
        return $_SERVER['REQUEST_METHOD'];
    }


    public function acceptVerb(): bool
    {
        $verb = $this->getHttpVerb();
        return in_array($verb, self::$verbs) ;
    }
}