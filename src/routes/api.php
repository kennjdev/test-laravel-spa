<?php

use App\Http\Controllers\Api\NoteController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\support\Facades\Auth;
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

Route::post('/login', [AuthController::class, 'login']);
Route::post('/signup', [AuthController::class, 'signup']);

Route::get('/logout', function( Request $request){

    Auth::logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return 'ok';
});

Route::middleware('auth:sanctum')->resource('notes', NoteController::class);

