<?php

namespace App\Http\Controllers;

use App\Models\WorkingTimeAssignment;
use Illuminate\Http\Request;

class WorkingTimeAssignmentController extends Controller
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

        $projectNumber = $request->input('projectNumber');
        $rfqNumber = $request->input('rfqNumber');
        $typeCode = $request->input('typeCode');
        $assignedTime = $request->input('assignedTime');
        $comment = $request->input('comment');


        return [
            'projectNumber' => $projectNumber,
            'rfqNumber' => $rfqNumber,
            'typeCode' => $typeCode,
            'assignedTime' => $assignedTime,
            'comment' => $comment
        ];
    }

    /**
     * Display the specified resource.
     */
    public function show(WorkingTimeAssignment $workingTimeAssignment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(WorkingTimeAssignment $workingTimeAssignment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, WorkingTimeAssignment $workingTimeAssignment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(WorkingTimeAssignment $workingTimeAssignment)
    {
        //
    }
}
