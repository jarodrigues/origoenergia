<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $fillable = [
        'nome','email','telefone','estado','cidade','dt_nascimento','plano'
    ];

  
    public static function dataCliente(){ 
        return static::join('states','clientes.estado', '=', 'states.id')
        ->join('cities','clientes.cidade', '=', 'cities.id')
        ->select('clientes.*','cities.name as ncidade', 'states.name as nestado', 'states.abbr as uf')
        ->get();
    }

    public function city(){ 
        return $this->hasMany(City::class, 'cidade');
    }

    public function validaEmail($param, $id = null)
    {
        if(ctype_digit($id)){
            return $this->where('email', $param)->where('id','!=' ,$id)->exists();
        }
        return $this->where('email', $param)->exists();
        
    }
}
