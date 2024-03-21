<?php

use App\Http\Controllers\CalculatedAttendanceController;
use App\Http\Controllers\CostGroupController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RfqController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WorkingTimeAssignmentController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    $user = $request->user();
    $user->role = $user->getRoleNames()[0];

    return $user;
});

Route::get('/calculatedAttendances/{user_id}/date/{date}', [CalculatedAttendanceController::class, 'showAttendanceByDate']);
Route::get('/working-time-assignments', [WorkingTimeAssignmentController::class, 'index']);
Route::post('/assignment/new-entry', [WorkingTimeAssignmentController::class, 'store']);
Route::get('/assignment/allProjectNumbers', [ProjectController::class, 'index']);
Route::get('/assignment/allRfqNumbers', [RfqController::class, 'index']);
Route::get('/assignment/allCostGroups', [CostGroupController::class, 'index']);
