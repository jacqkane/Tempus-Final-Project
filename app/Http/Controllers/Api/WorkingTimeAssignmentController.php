<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\WorkingTimeAssignment;

class WorkingTimeAssignmentController extends Controller
{
    public function index()
    {
        $assignments = WorkingTimeAssignment::all();
        return response()->json($assignments);
    }
}
