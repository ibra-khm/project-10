<?php

namespace App\Http\Controllers;

use App\CarPart;
use Illuminate\Http\Request;

class CarController extends Controller
{
    public function index(Request $request)
    {
        $carParts = CarPart::whereHas('cars', function ($query) use ($request) {
            $query->where('make', $request->make)
                ->where('model', $request->model)
                ->where('year', $request->year)
                ->where('engine_size', $request->engine_size);
        })->get();

        return response()->json([
            'status' => 200,
            'data' =>$carParts,
        ]);
    }
//
}