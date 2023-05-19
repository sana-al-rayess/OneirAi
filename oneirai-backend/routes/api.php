<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DreamController;
use App\Http\Controllers\HoroscopeController;
use App\Http\Controllers\SubscriberController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\AdminController;




Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login'])->name('login');
Route::post('logout', [UserController::class, 'logout']);
Route::post('/subscribe', [SubscriberController::class, 'subscribe']);


Route::controller(ForgotPasswordController::class)->group(function () {
    Route::post('password/reset/{token}', 'showResetForm')->name('password.reset');
    Route::post('/password/email', 'sendResetLinkEmail');
    Route::post('/reset', 'reset')->name('password.update');
});


Route::post('/chatgpt', [DreamController::class, 'getResponse']);
Route::post('/dal-e', [DreamController::class, 'generateImage']);
 Route::get('userCount', [AdminController::class, 'userCount']);

Route::post('getHoroscope', [HoroscopeController::class, 'getHoroscope']);
Route::post('getCompatibility', [HoroscopeController::class, 'getCompatibility']);
Route::post('getPersonality', [HoroscopeController::class, 'getPersonality']);
Route::post('analysis', [HoroscopeController::class, 'getPersonalityAnalysis']);
Route::get('/info/{id}', [UserController::class, 'show']);


Route::group(['middleware' => 'user.role'], function () {
    Route::get('userInfo', [UserController::class, 'getUser']);
    Route::post('updateUserInfo', [UserController::class, 'updateUser']);
    Route::post('updatePassword', [UserController::class, 'updatePassword']);
    Route::post('addDream', [DreamController::class, 'addDream']);
    Route::delete('deleteDream/{id}', [DreamController::class, 'deleteDream']);
    Route::get('getDreams', [DreamController::class, 'getDreams']);
    Route::get('searchByTitle', [DreamController::class, 'searchByTitle']);
    Route::get('sortByDate/{sort}', [DreamController::class, 'sortByDate']);
    Route::put('/dreams/{id}', [DreamController::class, 'updateInterpretation']);
    Route::post('/visuals/{id}', [DreamController::class, 'updateVisualization']);
    Route::get('/download/{id}', [DreamController::class, 'download']);
});

Route::group(['prefix' => 'admin'], function () {
    Route::group(['middleware' => 'admin.role'], function () {
        Route::get('getUsers', [AdminController::class, 'getUsers']);
       
        Route::get('/dreamstat', [AdminController::class, 'getLocationStats']);

    });
});