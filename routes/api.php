<?php

use App\Http\Controllers\CalculatedAttendanceController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CostGroupController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RfqController;
use App\Http\Controllers\UserController;
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
    $user->roles = $user->getRoleNames(); // had to remove the [0] from getRoleNames and swith role to roles

    return $user;
});

Route::get('/calculatedAttendances/{user_id}/date/{date}', [CalculatedAttendanceController::class, 'showAttendanceByDate']);
Route::get('/working-time-assignments', [WorkingTimeAssignmentController::class, 'index']);

Route::post('/assignment/entry', [WorkingTimeAssignmentController::class, 'store']);
Route::get('/assignment/allProjectNumbers', [ProjectController::class, 'index']);
Route::get('/assignment/allRfqNumbers', [RfqController::class, 'index']);
Route::get('/assignment/allCostGroups', [CostGroupController::class, 'index']);

Route::post('/contact', [ContactController::class, 'sendEmail']);

Route::post('/assignment/dayEntries', [WorkingTimeAssignmentController::class, 'getSelectedDay']);
Route::post('/assignment/delete-entry', [WorkingTimeAssignmentController::class, 'deleteEntryById']);
Route::post('/assignment/edit-query', [WorkingTimeAssignmentController::class, 'getEntryById']);

Route::get('/users', [UserController::class, 'index']);

Route::get('/projects', [ProjectController::class, 'index']);
Route::post('/projects', [ProjectController::class, 'store']);
Route::get('/projects/{id}', [ProjectController::class, 'show']);
Route::put('/projects/{id}', [ProjectController::class, 'update']);
Route::delete('/projects/{id}', [ProjectController::class, 'destroy']);
