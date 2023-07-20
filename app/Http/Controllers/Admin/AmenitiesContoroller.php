<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AmenitiesRequest;
use App\Services\AmenitiesService;
use Illuminate\Http\Request;

class AmenitiesContoroller extends Controller
{
    /* Display a listing of the resource. */
    public function index()
    {
        try {
            $amenities = AmenitiesService::findAll();
            return view('admin.modules.amenity.index', ['title' => 'Amenities list', 'amenities'=> $amenities]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /* Store a newly created resource in storage. */
    public function store(AmenitiesRequest $request)
    {
        try {
            AmenitiesService::store($request);
            return redirect()->route('admin.amenity.index');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /* Show the form for editing the specified resource. */
    public function edit(string $id)
    {
        try {
            $edit = AmenitiesService::findById($id);
            $amenities = AmenitiesService::findAll();
            return view('admin.modules.amenity.index', ['title' => 'Amenities edit', 'amenities' => $amenities, 'edit' => $edit]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /* Update the specified resource in storage. */
    public function update(Request $request, string $id)
    {
        try {
            AmenitiesService::update($id, $request);
            return redirect()->route('admin.amenity.index');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /* Remove the specified resource from storage. */
    public function destroy(string $id)
    {
        try {
            AmenitiesService::findById($id)->delete();
            return redirect()->route('admin.amenity.index');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
