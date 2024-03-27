<?php

namespace App\Http\Controllers;

use App\Models\Rfq;
use Illuminate\Http\Request;

class RfqController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $allRfqs = Rfq::all();
        return response()->json($allRfqs);
    }


    /**
     * Store new project "create" new project.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'rfq_name' => 'required|string',
            'rfq_number' => 'required|string',
        ]);

        $rfq = Rfq::create($validatedData);

        return response()->json($rfq, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Rfq $rfq)
    {
        return response()->json($rfq);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $rfq = Rfq::findOrFail($id);

        $rfq->rfq_name = $request->input('rfq_name');
        $rfq->rfq_number = $request->input('rfq_number');

        $rfq->update();

        return response()->json(['message' => 'rfq updated']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        $rfq = Rfq::findOrFail($id);

        $rfq->delete();

        return response()->json(null, 204);
    }
}
