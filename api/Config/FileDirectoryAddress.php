<?php

namespace Api\Config;

class FileDirectoryAddress
{   
    public $ProjectRootPath;

    function __construct()
    {
        echo "fine" . PHP_EOL;   
    }

    public static function ProjectRootPath()
    {
        return self::$ProjectRootPath = $_SERVER["DOCUMENT_ROOT"] . "/Config/Autoload.php";
    }



}

