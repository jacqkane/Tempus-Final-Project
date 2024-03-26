<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\InternalAttendance;
use Illuminate\Http\Request;

class InternalAttendanceController extends Controller
{
    public function index()
    {
        $internalAttendance = InternalAttendance::all();

        return compact('internalAttendance');
    }
}
