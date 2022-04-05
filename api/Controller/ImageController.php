<?php

namespace Api\Controller;

use Api\Helper\FileHandler;

class ImageController extends FileHandler
{
    public static $imageFolderPath;
    public static $width;
    public static $height;
    
    public static function resizeImage()
    {
        $file = new FileHandler;
        // $array = json_decode( file_get_contents('php://input'), true ) ;
        // var_dump("ss");

        // header('Content-Type: application/json; charset=utf-8');
        // echo json_encode( ["array" => [1, 88, "kk"]] );

        
        self::$width = 500;
        self::$height = 450;
        $imagick = new \Imagick( realpath($file->projectRootPath()."\api\Storage\RawImage\\1.jpg") );
        $imagick->adaptiveResizeImage(self::$width, self::$height, $bestFit = false);
        header("Content-Type: image/jpeg");
        echo base64_encode($imagick->getImageBlob());
        // $imagick->writeImage ('ff.jpg');
        $imagick->clear();
    }

    

}