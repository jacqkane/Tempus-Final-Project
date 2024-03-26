<?php

use App\Http\Controllers\Auth\ResetPasswordController;
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

Route::get('/projects', [ProjectController::class, 'index']);
Route::post('/projects', [ProjectController::class, 'store']);
Route::get('/projects/{id}', [ProjectController::class, 'show']);
Route::put('/projects/{id}', [ProjectController::class, 'update']);
Route::delete('/projects/{id}', [ProjectController::class, 'destroy']);
Route::get('/roles', [RoleController::class, 'getRoles']);
Route::post('/add/user', [UserController::class, 'store']);
Route::post('/reset/password', [ResetPasswordController::class, 'reset']);

Route::get('/rfqs', [RfqController::class, 'index']);
Route::post('/rfqs', [RfqController::class, 'store']);
Route::get('/rfqs/{id}', [RfqController::class, 'show']);
Route::put('/rfqs/{id}', [RfqController::class, 'update']);
Route::delete('/rfqs/{id}', [RfqController::class, 'destroy']);
