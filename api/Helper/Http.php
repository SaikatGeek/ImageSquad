<?php

namespace Api\Helper;

class Http
{
    public static $verbs = ['GET', 'POST', 'PUT'];

    function __construct()
    {
    }


    public function acceptVerb(string $verb): bool
    {
        return in_array($verb, self::$verbs);
    }
}