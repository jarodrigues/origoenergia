<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{

    /**
     * Get the state that owns the city.
     */
    public function state()
    {

        return $this->belongsTo(State::class, 'state_id');

    }

}
