<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClientePlano extends Model
{
    protected $fillable = [
        'cliente_id','plano_id'
    ];
}
