<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{

    public function index()
    {
        return Category::all();
    }

    public function show(Category $category)
    {
        return $category;
    }

    public function store(Request $request)
    {
        if (Auth::user()->isAdmin()) {
            $category = Category::create($request->all());
            return response()->json($category, 201);
        } else {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
    }

    public function update(Request $request, Category $category)
    {
        if (Auth::user()->isAdmin()) {
            $category->update($request->all());
            return response()->json($category, 200);
        } else {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
    }

    public function delete(Category $category)
    {
        if (Auth::user()->isAdmin()) {
            $category->delete();
            return response()->json(null, 204);
        } else {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
    }
}
