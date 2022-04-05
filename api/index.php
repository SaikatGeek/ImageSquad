<?php
// error_reporting(0);
include "./autoload.php";

use Api\Helper\Request;
use Api\Helper\Router;
use Api\Helper\Http;
use Api\Controller\ImageController;


// echo Request::endpoint();
Router::get("mock", "ImageController@resizeImage");


<<<<<<< HEAD
// print_r( new Http);

// new ImageController;

// var_dump( $_POST['data'] );
// print_r( json_decode( file_get_contents('php://input'), true )->data );


=======
>>>>>>> 30c94b9af164fb30f5d32b7208efffa3c808eac8
