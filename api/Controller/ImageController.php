<?php

namespace Api\Controller;

use Api\Helper\FileHandler;

class ImageController
{
    public static $imageFolderPath;
    public static $width;
    public static $height;
    
    

    public static function resizeImage()
    {
        $file = new FileHandler;
         
        self::$width = 500;
        self::$height = 450;
        $imagick = new \Imagick(realpath($file->projectRootPath()."\api\Storage\RawImage\\1.jpg"));
        $imagick->adaptiveResizeImage(self::$width, self::$height, $bestFit = false);
        header("Content-Type: image/jpeg");
        // echo $imagick->getImageBlob();
        $imagick->writeImage ('ff.jpg');
        $imagick->clear();
    }

    

}