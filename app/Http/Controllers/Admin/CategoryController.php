<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\CategoryService;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /* Display a listing of the resource. */
    public function index()
    {
        try {
            $categories = CategoryService::findAll();
            return view('admin.modules.category.index', ['title' => 'Category List', 'categories' => $categories]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /* Show the form for creating a new resource. */
    public function create()
    {
        //
    }

    /* Store a newly created resource in storage. */
    public function store(Request $request)
    {
        try {
            CategoryService::store($request);
            return redirect()->route('admin.category.index');
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
