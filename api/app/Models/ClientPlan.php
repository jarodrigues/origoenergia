<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ClientPlan extends Model
{
 
    protected $fillable = [
        'client_id','plan_id'
    ]; 

    
    public function plan(){
        return $this->belongsTo(Plan::class, 'plan_id', 'id');
    }
    

    public function customers(){
        return $this->belongsTo(Client::class);
    }
    

}
