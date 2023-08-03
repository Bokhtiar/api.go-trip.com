<?php

namespace App\Services;

use App\Models\Complement;
use Illuminate\Support\Str;

class ComplementService
{
    /* find all resource */
    public static function findAll()
    {
        return Complement::all();
    }

    /* store resoruce documents */
    public static function storeDocument($request)
    {
        return array(
            'name' => $request->name,
            'slug' =>  Str::slug($request->name),
            'items' => $request->items
        );
    }

    /* new store resource docuemnt */
    public static function store($request)
    {
        return Complement::create(ComplementService::storeDocument($request));
    }

    /* specific reosurce show */
    public static function findById($id)
    {
        return Complement::where('complement_id', $id)->first();
    }

    /* specific reosurce update */
    public static function update($id, $request)
    {
        $complement = ComplementService::findById($id);
        return $complement->update(ComplementService::storeDocument($request));
    }
}
