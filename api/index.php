<?php
// error_reporting(0);
include "./autoload.php";

use Api\Helper\Request;
use Api\Helper\Router;
use Api\Helper\Http;



echo Request::endpoint();
echo Router::get("service", "HomeControldler@demoFunction");


// print_r( new Http);