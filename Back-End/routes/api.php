<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/googleLogin', [AuthController::class, 'googleLogin']);
Route::post('/facebookLogin', [AuthController::class, 'facebookLogin']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);



Route::resource('/product', ProductsController::class);
Route::get('/product/{id}', [ProductsController::class, 'show']);

Route::get('/allProducts', [AdminController::class, 'allProducts']);
Route::post('/addProduct', [AdminController::class, 'addProduct']);
Route::put('/editProduct/{id}', [AdminController::class, 'editProduct']);
Route::post('/delProduct/{id}', [AdminController::class, 'delProduct']);

Route::get('/categories', [CategoryController::class, 'index']);



Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/addCart', [CartController::class, 'store']);
    Route::get('/getCart', [CartController::class, 'index']);

    Route::delete('/deleteCart/{id}', [CartController::class, 'destroy']);
    Route::put('/editCart/{id}', [CartController::class, 'update']);

    Route::get('/logout', [AuthController::class, 'logout']);
    // Endpoint for getting user
    Route::get('/user', [AuthController::class, 'user']);
    Route::put('/user/update', [AuthController::class, 'updateData']);
    Route::post('/profileimage', [ProfileController::class, 'uploadImage']);

});