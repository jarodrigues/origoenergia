<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('clients')->group(function(){
    Route::get('/', 'ClientController@index');
    Route::get('/{id}', 'ClientController@show');
    Route::post('/', 'ClientController@store');
    Route::put('/{id}', 'ClientController@update');
    Route::delete('/{id}', 'ClientController@delete');
});

Route::get('/states', 'ClientController@states');
Route::get('/cities/{id}', 'ClientController@cities');
Route::get('plans', 'PlanController@index');