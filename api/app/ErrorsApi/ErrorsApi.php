<?php

namespace App\ErrorsApi;

class ErrorsApi{

    /** Mensagens de retorno da api */

    public static function msgError($message, $code)
    {
        return [
            'data' => [
                'msg' => $message,
                'code' => $code
            ]
        ];
    }

}