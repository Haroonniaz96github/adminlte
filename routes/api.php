<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\AreaController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::apiResources(
//    [
//        'category' => 'API\CategoryController'
//    ]
//);

// Route::get('categories', [CategoryController::class, 'index']);
// Route::post('store', [CategoryController::class, 'store']);
// Route::get('edit/{id}', [CategoryController::class, 'edit']);
// Route::post('update/{id}', [CategoryController::class, 'update']);

Route::resource('/categories', CategoryController::class);
Route::resource('/areas', AreaController::class);
