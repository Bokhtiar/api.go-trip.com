<?php

namespace App\Services;

use App\Models\Amenity;
use Illuminate\Support\Str;

class AmenitiesService
{
    /* find all resource */
    public static function findAll()
    {
        return Amenity::all();
    }

    /* store resoruce documents */
    public static function storeDocument($request)
    {
        return array(
            'name' => $request->name,
            'slug' =>  Str::slug($request->name)
        );
    }

    /* new store resource docuemnt */
    public static function store($request)
    {
        return Amenity::create(AmenitiesService::storeDocument($request));
    }

    /* specific reosurce show */
    public static function findById($id)
    {
        return Amenity::where('amenity_id', $id)->first();
    }

    /* specific reosurce update */
    public static function update($id, $request)
    {
        $amenity = AmenitiesService::findById($id);
        return $amenity->update(AmenitiesService::storeDocument($request));
    }
}
