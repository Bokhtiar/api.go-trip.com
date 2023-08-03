<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\ComplementService;
use Illuminate\Http\Request;

class ComplementController extends Controller
{
    /* Display a listing of the resource. */
    public function index()
    {
        try {
            $complements = ComplementService::findAll();
            return view('admin.modules.complement.index', ['title' => "Complement list", 'complements' => $complements]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /* Store a newly created resource in storage. */
    public function store(Request $request)
    {
        try {
            ComplementService::store($request);
            return redirect()->route('admin.complement.index');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
