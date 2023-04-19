<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;




Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::post('logout', [UserController::class, 'logout']);


Route::group(['middleware' => 'user.role'], function () {
    Route::get('userInfo', [UserController::class, 'getUser']);
    Route::post('updateUserInfo', [UserController::class, 'updateUser']);

});