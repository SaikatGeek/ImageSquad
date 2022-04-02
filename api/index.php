<?php
// error_reporting(0);
include "./autoload.php";

use Api\Helper\Request;
use Api\Helper\Router;
use Api\Helper\Http;
use Api\Controller\ImageController;


// echo Request::endpoint();
echo Router::get("api", "ImageController@resizeImage");


// print_r( new Http);

// new ImageController;