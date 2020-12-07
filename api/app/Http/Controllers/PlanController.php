<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    public function __construct(Plan $plans) 
    {
        $this->plans = $plans;
    }
    public function index()
    {
        $data = $this->plans->all();
        return   $data;
       
    }

    public function show(Plan $id)
    {
        return $id;
    }
}
