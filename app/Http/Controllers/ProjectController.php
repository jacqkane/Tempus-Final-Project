<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $allProjects = Project::all();
        return response()->json($allProjects);
    }

    /**
     * Store new project "create" new project.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'project_number' => 'required|string',
            'project_name' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
        ]);

        $project = Project::create($validatedData);

        return response()->json($project, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return response()->json($project);
    }

    /**
     * Update project or "edit".
     */
    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        $project->project_name = $request->input('project_name');
        $project->project_number = $request->input('project_number');
        $project->start_date = $request->input('start_date');
        $project->end_date = $request->input('end_date');


        $project->update();

        return response()->json(['message' => 'project updated', 'id' => $project->id]);
    }

    public function destroy(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        $project->delete();

        return response()->json(null, 204);
    }
}
