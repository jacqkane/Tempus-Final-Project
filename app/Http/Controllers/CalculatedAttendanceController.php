<?php

namespace App\Http\Controllers;

use App\Models\CalculatedAttendance;
use Illuminate\Http\Request;

class CalculatedAttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(CalculatedAttendance $calculatedAttendance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CalculatedAttendance $calculatedAttendance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CalculatedAttendance $calculatedAttendance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CalculatedAttendance $calculatedAttendance)
    {
        //
    }

    public function showAttendanceByDate($user_id, $date)
    {

        if ($user_id !== null & $date !== null) {
            $calculatedAttendance = CalculatedAttendance::query()
                ->where('user_id', '=', $user_id)
                ->where('date', 'like', $date)
                ->get();
        }
        return compact('calculatedAttendance');

    }
}
