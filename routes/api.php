<?php

use App\Http\Controllers\CalculatedAttendanceController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CostGroupController;
use App\Http\Controllers\InternalAttendanceController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RfqController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StampActionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WorkingTimeAssignmentController;
use App\Models\StampAction;


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
    $user->role = $user->getRoleNames();

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

Route::post('/attendance/entry', [InternalAttendanceController::class, 'store']);
Route::post('/attendance/day-attendancies', [InternalAttendanceController::class, 'showDay']);
Route::get('/attendance/all-stamp-types', [StampActionController::class, 'index']);
Route::post('/attendance/delete-entry', [InternalAttendanceController::class, 'deleteAttendanceEntryById']);
Route::post('/attendace/edit-query', [InternalAttendanceController::class, 'getAttendanceEntryById']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::post('/projects', [ProjectController::class, 'store']);
Route::get('/projects/{id}', [ProjectController::class, 'show']);
Route::put('/projects/{id}', [ProjectController::class, 'update']);
Route::delete('/projects/{id}', [ProjectController::class, 'destroy']);
Route::get('/roles', [RoleController::class, 'getRoles']);
Route::post('/add/user', [UserController::class, 'store']);

// We need to have a route for login - something like:
// Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login'); ***or***
// Route::post('/login', 'Auth\LoginController@login');
