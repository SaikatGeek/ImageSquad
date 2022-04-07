<?php

namespace Api\Controller;

use Api\Helper\FileHandler;

class ImageController 
{
    public static $imageFolderPath;
    public static $width;
    public static $height;

    public static function galleryImageList()
    {
        $galleryImageList = [];
        $iterator = new \DirectoryIterator( realpath($_SERVER["DOCUMENT_ROOT"]."/api/Storage/RawImage") );
        
        foreach ($iterator as $fileInfo) {
            if( $iterator->isFile() ){
                if(in_array( $iterator->getExtension(), ['jpg', 'png', 'jpeg'])){
                    array_push($galleryImageList, "/api/Storage/RawImage/" . $iterator->getFilename() );
                }
            }
        }

        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($galleryImageList);

    }
    
    public static function resizeImage()
    {
        $file = new FileHandler;
        self::$width = 500;
        self::$height = 450;
        $imagick = new \Imagick( realpath($file->projectRootPath()."\api\Storage\RawImage\\1.jpg") );
        $imagick->adaptiveResizeImage(self::$width, self::$height, $bestFit = false);
        header("Content-Type: image/jpeg");
        echo base64_encode( $imagick->getImageBlob() );
        $imagick->clear();
    }



    

}
