<?php

namespace App\Services;

use App\Models\Category;
use Illuminate\Support\Str;

class CategoryService
{
    /* find all resource */
    public static function findAll()
    {
        return Category::all();
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
        return Category::create(CategoryService::storeDocument($request));
    }

    /* specific reosurce show */
    public static function findById($id)
    {
        return Category::where('category_id', $id)->first();
    }

    /* specific reosurce update */
    public static function update($id, $request)
    {
        $category = CategoryService::findById($id);
        return $category->update(CategoryService::storeDocument($request));
    }
}
