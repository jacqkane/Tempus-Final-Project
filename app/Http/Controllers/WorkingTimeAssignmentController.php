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
        $assignments = WorkingTimeAssignment::all();
        return response()->json($assignments);
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


        $assignment_new = new WorkingTimeAssignment;
        $assignment_new->user_id = auth()->user()->id;
        $assignment_new->project_id = $request->input('project_id');
        $assignment_new->cost_group_id = $request->input('cost_group_id');
        $assignment_new->working_time_assigned = $request->input('working_time_assigned');
        $assignment_new->comment = $request->input('comment');
        $assignment_new->date = $request->input('date');
        $assignment_new->rfq_id = $request->input('rfq_id');
        $assignment_new->approval_status_id = 1;
        $assignment_new->save();


        return [
            'user_id' => $assignment_new->user_id,
            'project_id' => $assignment_new->project_id,
            'cost_group_id ' => $assignment_new->rfq_id,
            'cost_group_id' => $assignment_new->rfq_id,
            'working_time_assigned' => $assignment_new->working_time_assigned,
            'comment' => $assignment_new->comment,
            'date' => $assignment_new->date
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
