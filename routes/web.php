<?php

use App\Http\Controllers\Admin\CategoryController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/* Web auth routes */
Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

/* Web Routes */
Route::get('/', function () {
    return view('welcome');
});

/* User auth routes */
Route::group(["as" => 'user.', "prefix" => 'user', "middleware" => ['auth', 'user']], function () {
    Route::get('/dashboard', [app\Http\Controllers\User\UserDashboardControllerr::class, 'index'])->name('dashboard');
});

/* Admin auth routes */
Route::group(["as" => 'admin.', "prefix" => 'admin', "middleware" => ['auth', 'admin']], function () {
    Route::get('/dashboard', [App\Http\Controllers\Admin\AdminDashboardController::class, 'index'])->name('dashboard');
    /* category */
    Route::resource('category', CategoryController::class);

    Route::get('/logout', [App\Http\Controllers\Admin\AdminDashboardController::class, 'logout'])->name('logout');
});

