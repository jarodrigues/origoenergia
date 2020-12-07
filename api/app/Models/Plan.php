<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    

    public function customers()
    {
        return $this->belongsToMany(Client::class, 'client_plans', 'plan_id', 'client_id');
    }

}
