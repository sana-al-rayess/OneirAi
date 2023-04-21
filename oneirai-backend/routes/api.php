<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DreamController;




Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::post('logout', [UserController::class, 'logout']);


Route::group(['middleware' => 'user.role'], function () {
    Route::get('userInfo', [UserController::class, 'getUser']);
    Route::post('updateUserInfo', [UserController::class, 'updateUser']);
    Route::post('updatePassword', [UserController::class, 'updatePassword']);
    Route::post('addDream', [DreamController::class, 'addDream']);
});