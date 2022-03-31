<?php

function SplAutoload ($name) {
    if( False !== stripos( $name, "Api" ) ) {
        $path = str_replace("Api\\", "", $name);
        include_once  $path . ".php";
    }
}

spl_autoload_register("SplAutoload");