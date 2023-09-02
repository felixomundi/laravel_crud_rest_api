<?php

use App\Http\Controllers\Api\StudentController;
use App\Http\Controllers\Auth\AuthenticationController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::controller(StudentController::class,)-> group(function(){
Route::get("/students","index");
Route::post("/students","store");
Route::get("/students/{id}","show");
Route::get("/students/{id}/edit","edit");
Route::put("/students/{id}/edit","update");
Route::delete("/students/{id}/delete","destroy");
});


// Auth Routes
Route::post("/users/register", [AuthenticationController::class, "register"]);
Route::post("/users/login", [AuthenticationController::class, "login"])->name("login");

Route::middleware("auth:api")->group(function(){
    Route::get("/user", [AuthenticationController::class, "getUser"]);
    Route::post("/users/logout", [AuthenticationController::class, "logout"]);


});
