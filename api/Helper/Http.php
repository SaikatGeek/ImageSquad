<?php

namespace Api\Helper;

class Http
{
    public static $verbs = ['GET', 'POST', 'PUT'];

    function __construct()
    {
        echo "\n";
    }


    public function acceptVerb(string $verb): bool
    {
        var_dump("stage1: acceptVerb done");
        echo "\n";
        return in_array($verb, self::$verbs);
    }
}