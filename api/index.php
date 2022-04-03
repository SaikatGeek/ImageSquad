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


$dir = new \DirectoryIterator( realpath( "E:\Javascript\Kent C. Dodds - Testing JavaScript" ) );



foreach ($dir as $fileInfo) {
    if( $fileName = str_replace("TutFlix.io--", " F-", $fileInfo->getFilename() ) ) {

        rename("E:\Javascript\Kent C. Dodds - Testing JavaScript\\". $fileInfo->getFilename(), "E:\Javascript\Kent C. Dodds - Testing JavaScript\\" . $fileName);
    }
}