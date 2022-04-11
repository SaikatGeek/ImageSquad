<?php
error_reporting(0);
include "./autoload.php";

use Api\Helper\Request;
use Api\Helper\Router;
use Api\Helper\Http;
use Api\Controller\ImageController;


// echo Request::endpoint();

Router::get("gallery", "ImageController@galleryImageList");
Router::get("resize", "ImageController@resizeImage");
Router::get("sepia", "ImageController@sepiaImage");
Router::post("sharpen", "ImageController@sharpenImage");
Router::post("wave", "ImageController@waveImage");
Router::post("contrast", "ImageController@localContrastImage");
Router::post("annotate", "ImageController@annotateImage");



