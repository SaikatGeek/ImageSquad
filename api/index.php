<?php
// error_reporting(0);
include "./autoload.php";

use Api\Helper\Request;
use Api\Helper\Router;
use Api\Helper\Http;
use Api\Controller\ImageController;


// echo Request::endpoint();
Router::get("mock", "ImageController@resizeImage");


// print_r( new Http);

// new ImageController;

// var_dump( $_POST['data'] );
// print_r( json_decode( file_get_contents('php://input'), true )->data );


