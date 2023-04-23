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
    Route::delete('deleteDream/{id}', [DreamController::class, 'deleteDream']);

    Route::get('getDreams', [DreamController::class, 'getDreams']);
    Route::get('searchByTitle', [DreamController::class, 'searchByTitle']);
    Route::get('sortByDate/{sort}', [DreamController::class, 'sortByDate']);
});

Route::group(['prefix' => 'admin'], function () {
    Route::group(['middleware' => 'admin.role'], function () {
        Route::get('getUsers', [UserController::class, 'getUsers']);
      
    });
});
