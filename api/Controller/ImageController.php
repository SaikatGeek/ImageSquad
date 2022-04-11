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
        $iterator = new \DirectoryIterator(realpath($_SERVER["DOCUMENT_ROOT"] . "/api/Storage/RawImage"));

        foreach ($iterator as $fileInfo) {
            if ($iterator->isFile()) {
                if (in_array($iterator->getExtension(), ['jpg', 'png', 'jpeg'])) {
                    $galleryImageList += [explode(".", $iterator->getFilename())[0] => "/api/Storage/RawImage/" . $iterator->getFilename()];
                }
            }
        }

        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($galleryImageList);
    }

    public static function resizeImage()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $file = new FileHandler;
        $width = $data['width'] > 100 ? $data['width'] : 100;
        $height = $data['height'] > 100  ? $data['height'] : 100;
        $bestFit = $data['bestFit'] === true ? true : false;
        $imagePath = $data['imagePath'];

        $imagick = new \Imagick(realpath($file->projectRootPath() . $imagePath));
        $imagick->adaptiveResizeImage($width, $height, $bestFit);
        header("Content-Type: image/jpeg");
        echo base64_encode($imagick->getImageBlob());
        $imagick->clear();
    }

    public static function sepiaImage()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $file = new FileHandler;
        $range = $data['range'];
        $imagePath = $data['imagePath'];

        $imagick = new \Imagick(realpath($file->projectRootPath() . $imagePath));
        $imagick->sepiaToneImage($range);
        header("Content-Type: image/jpeg");
        echo base64_encode($imagick->getImageBlob());
        $imagick->clear();
    }

    public static function sharpenImage()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $file = new FileHandler;
        $radius = $data['radius'];
        $sigma = $data['sigma'];
        $imagePath = $data['imagePath'];

        try {
            $imagick = new \Imagick(realpath($file->projectRootPath() . $imagePath));
            $imagick->adaptiveSharpenImage($radius, $sigma);
            header("Content-Type: image/jpeg");
            echo base64_encode($imagick->getImageBlob());
            $imagick->clear();
        } catch(\ImagickException $e) {
            echo 'Error: ' , $e->getMessage();
            die();
        }
        
    }
}
