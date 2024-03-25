<?php

namespace App\Http\Controllers;

use App\Models\InternalAttendance;
use App\Models\StampAction;
use Illuminate\Http\Request;

class InternalAttendanceController extends Controller
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
        $internal_attendance_id = $request->input('internal_attendance_id');
        $stamp_action_id = $request->input('stamp_action_id');
        $stamp_action_name = $request->input('stamp_action_name');
        $date = $request->input('date');
        $time = $request->input('time');
        $user_id = auth()->user()->id;

        $stamp_selected = StampAction::where('name', '=', $stamp_action_name)->first();

        if ($internal_attendance_id == 0) {
            //new entry
            $attendance_new = new InternalAttendance();
            $attendance_new->user_id = $user_id;
            $attendance_new->stamp_action_id = $stamp_selected->id;
            $attendance_new->date = $date;
            $attendance_new->time = $time;
            $attendance_new->save();
        } else {
            //update
            $stamp_selected = StampAction::where('name', '=', $stamp_action_name)->first();

            $attendance_update = InternalAttendance::where('id', '=', $internal_attendance_id)->first();
            $attendance_update->user_id = $user_id;
            $attendance_update->stamp_action_id = $stamp_selected->id;
            $attendance_update->date = $date;
            $attendance_update->time = $time;
            $attendance_update->update();
        }

        return [
            'message' => 'success',
            // 'stamp_id_selected' => $stamp_selected->name,
            'date' => $date,
            'time' => $time,
        ];
    }


    public function showDay(Request $request)
    {
        $selectedDay = $request->input('day');
        $user_id = auth()->user()->id;

        $dayAttendancies = InternalAttendance::query()
            ->with('stampAction')
            ->where('user_id', '=', $user_id)
            ->where('date', '=', $selectedDay)
            ->orderBy('time', 'desc')
            ->get();

        return $dayAttendancies;
    }


    public function deleteAttendanceEntryById(Request $request)
    {
        $entryAttendanceId = $request->input('id');

        $entryToDelete = InternalAttendance::query()
            ->where('id', '=', $entryAttendanceId)
            ->delete();

        return [
            'message' => $entryAttendanceId . 'deleted',
            'entryToDelete' => $entryToDelete
        ];
    }

    public function getAttendanceEntryById(Request $request)
    {
        $internal_attendance_id = $request->input('internal_attendance_id');

        $AttendanceEntryToEdit = InternalAttendance::query()
            ->with('stampAction')
            ->where('id', '=', $internal_attendance_id)
            ->get();

        return $AttendanceEntryToEdit;
    }

    /**
     * Display the specified resource.
     */
    public function show(InternalAttendance $internalAttendance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(InternalAttendance $internalAttendance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, InternalAttendance $internalAttendance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InternalAttendance $internalAttendance)
    {
        //
    }
}
