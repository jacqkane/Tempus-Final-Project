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
    public function update(Request $request, Project $project)
    {
        try {
            $validatedData = $request->validate([
                'project_number' => 'string',
                'project_name' => 'string',
                'start_date' => 'date',
                'end_date' => 'date',
            ]);

            Log::info('Request Payload:', $validatedData);
            $project->update($validatedData);

            return response()->json($project, 200);
        } catch (\Exception $e) {
            Log::error('Error updating project:', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'An error occurred while updating the project.'], 500);
        }
    }

    public function destroy(Project $project)
    {
        $project->delete();

        return response()->json(null, 204);
    }
}
