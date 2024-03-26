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
    public function show(Rfq $rfq)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rfq $rfq)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rfq $rfq)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rfq $rfq)
    {
        //
    }
}
