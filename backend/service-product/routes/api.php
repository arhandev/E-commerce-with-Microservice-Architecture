<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OwnerController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ImageProductController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\ReviewController;

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

//Owner 
Route::get('owners', [OwnerController::class, 'index']);
Route::get('owners/{id}', [OwnerController::class, 'show']);
Route::post('owners', [OwnerController::class, 'create']);
Route::put('owners/{id}', [OwnerController::class, 'update']);
Route::delete('owners/{id}', [OwnerController::class, 'destroy']);

// Product
Route::post('products', [ProductController::class, 'create']);
Route::put('products/{id}', [ProductController::class, 'update']);
Route::get('products', [ProductController::class, 'index']);
Route::get('products/{id}', [ProductController::class, 'show']);
Route::delete('products/{id}', [ProductController::class, 'destroy']);


// Image
Route::post('image-products', [ImageProductController::class, 'create']);
Route::get('image-products', [ImageProductController::class, 'index']);
Route::delete('image-products/{id}', [ImageProductController::class, 'destroy']);

// Transaction
Route::get('transactions', [TransactionController::class, 'index']);
Route::post('transactions', [TransactionController::class, 'create']);
Route::post('transactions/success', [TransactionController::class, 'createSuccessTransaction']);


// Review
Route::post('reviews', [ReviewController::class, 'create']);
Route::get('reviews', [ReviewController::class, 'index']);
Route::put('reviews/{id}', [ReviewController::class, 'update']);
Route::delete('reviews/{id}', [ReviewController::class, 'destroy']);

