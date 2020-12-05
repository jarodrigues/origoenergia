<?php

namespace App\Http\Controllers;

use App\Models\Plano;
use Illuminate\Http\Request;

class PlanoController extends Controller
{
    public function __construct(Plano $planos) 
    {
        $this->planos = $planos;
    }
    public function index()
    {
        $data = $this->planos->all();
        return  response()->json($data);
       
    }

    public function show(Plano $id)
    {
        return $id;
    }
}
