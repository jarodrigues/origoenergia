<?php

namespace App\Functions;

class Functions{

    /** Mensagens de retorno da api */

    public static function replaceData($param)
    { 
        return explode(',', str_replace("\"","", str_replace("[","", str_replace("]","", $param))));
    }

}