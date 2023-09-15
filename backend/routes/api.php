<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware(['auth:sanctum'])->group(function (){
  //cart routes
Route::controller(CartController::class)->group(function (){
    Route::get("/cart", "index");
    Route::post("/add-to-cart", "create");
    Route::get("/cart-total", "total");
});
});


//product routes
Route::controller(ProductController::class)->group(function (){
Route::post("/products/create", "store");
Route::get("/products", "index");
Route::get('/products/{slug}', "detail");
});


require __DIR__.'/auth.php';
