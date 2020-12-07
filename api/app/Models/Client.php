<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = [
        'name','email','phonenumber','state_id','city_id','dt_birth'
    ];

    public function city(){ 
        return $this->belongsTo(City::class, 'city_id');
    }

    public function state(){ 
        return $this->belongsTo(State::class, 'state_id');
    }

    public function validaEmail($param, $id = null)
    {
        if(ctype_digit($id)){
            return $this->where('email', $param)->where('id','!=' ,$id)->exists();
        }
        return $this->where('email', $param)->exists();
        
    }

    public function plans()
    {
        return $this->belongsToMany(Plan::class, 'client_plans', 'client_id', 'plan_id');
    }

}
