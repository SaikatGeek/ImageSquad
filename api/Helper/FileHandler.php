<?php

namespace Api\Helper;

class FileHandler
{   
    public $centralPath = [];

    function __construct()
    {
    }

    public function projectRootPath()
    {

        return $this->centralPath['projectRootPath'] = $_SERVER["DOCUMENT_ROOT"];

    }

    public function configPath()
    {

        return $this->centralPath['configPath'] = $_SERVER["DOCUMENT_ROOT"]."\api\Config";

    }

    

}

