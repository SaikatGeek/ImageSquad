<?php
namespace Api\Helper;

use Api\Helper\FileHandler;


class Controller extends FileHandler
{

    public static $controllerPath = "/FileSystem";

    public static $controllerNamespace = "Api" . "\Controller\\";

    public static $controllerList = [];

    public static function expectedControllerMethodCall($controllerName)
    {
        return self::controllerFileChecker($controllerName);
    }

    public static function controllerFileChecker($controllerName)
    {

        $controllerListArray = self::directoryFileList();

        $_controllerName = self::controllerName($controllerName);
        
        $controllerMethodName = self::controllerMethodName($controllerName);

        if( in_array($_controllerName, $controllerListArray) ){

            $controllerCall = self::$controllerNamespace.$_controllerName;
            
            if( is_callable([$controllerCall, $controllerMethodName], true, $callable_name) )
            {
                return self::callMethod($controllerCall, $controllerMethodName);
            }

        }
        else{
            throw new \Exception("{$_controllerName} is a invalid controller class");
        }

    }
    
    public static function callMethod($className, $methodName)
    {

        $controllerMethodCall = new \ReflectionMethod($className, $methodName);
        return $controllerMethodCall->invoke(new $className);
        
        // return call_user_func_array([$className, $methodName], []);

    }

    public static function controllerMethodName($controllerName){

        return substr($controllerName, strpos($controllerName, '@') + 1, strlen($controllerName) ) ;

    }

    public static function controllerName($controllerName){

        return substr($controllerName, 0, strpos($controllerName, '@') ) ;

    }

    public static function directoryFileList()
    {

        $controllerPath = self::getControllerPath();
        
        $dir = new \DirectoryIterator( realpath( $controllerPath ) );

        foreach ($dir as $fileInfo) {
			if( 'php' === $fileInfo->getExtension()  
                && $fileInfo->isFile() 
                && $fileInfo->isReadable() 
            ) {

				$fileName = $fileInfo->getFilename();
				$keyName = substr($fileName, 0, strpos($fileName, '.'));

                array_push(self::$controllerList, $keyName);
			}
		}

        return self::$controllerList;
    }

    public static function getControllerPath()
    {

        $path = new FileHandler;

        $file = require $path->configPath()."\FileSystem.php";

        $realControllerPath = $path->projectRootPath() . $file['Controller'];

        return $realControllerPath;

    }

    public static function __callStatic($name, $arguments)
    {

        return self::expectedControllerMethodCall($arguments[1]);
       
    }

}