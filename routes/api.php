<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CallRateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\PhoneCodeController;
use App\Http\Controllers\QuestionController;

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

Route::controller(PlanController::class)->group(function() {
    Route::get('/plans', 'index');
});

Route::controller(PhoneCodeController::class)->group(function() {
    Route::get('/phone-codes', 'index');
});

Route::get('/call-rates/calculate-call-cost/{plan}/{source}/{destination}/{duration}', [CallRateController::class, 'calculateCallCost']);

Route::controller(QuestionController::class)->group(function() {
    Route::get('/questions', 'index');
});

Route::controller(ArticleController::class)->group(function() {
    Route::get('/articles', 'index');
});