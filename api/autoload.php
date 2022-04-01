<?php

function SplAutoload ($name) {
    if( False !== stripos( $name, "Api" ) ) {
        $path = str_replace("Api\\", "", $name);
        include_once  $path . ".php";
    }

    if (!class_exists($name, false)) {
        throw new LogicException("Unable to load class: $name");
    }
}

spl_autoload_register("SplAutoload");