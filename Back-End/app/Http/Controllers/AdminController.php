<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function mainData()
    {
        $users = User::select('name', 'email', 'image')->take(5)->get();
        $count = User::count();
        $products = Product::count();
        return response()->json([
            'status' => 200,
            'usersPrev' => $users,
            'usersCount' => $count,
            'productCount' => $products,

        ]);
    }
    


    public function getAllUsers()
    {
        $users = User::all();

        return response()->json([
            'status' => 200,
            'users' => $users,
        ]);
    }
    public function editUser(Request $request)
    {

        $col = $request->column;
        $user = User::find($request->id);
        $user->$col = $request->data;
        $user->save();
        return response()->json([
            'status' => 200,

        ]);
    }

    public function delUser(Request $request)
    {


        $user = User::find($request->id);
        $user->delete();

        return response()->json([
            'status' => 200,
            'users' =>  User::all(),
        ]);
    }

    public function allProducts()
    {
        $products = Product::all();

        return response()->json([
            'status' => 200,
            'products' => $products
        ]);
    }

    public function addProduct(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'price' => 'required|numeric',
            'image' => 'required',
            'description' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 401, 'errors' => $validator->messages()]);
        }

        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'image' => $request->image,
            'link' => $request->link,
            'price' => $request->price,
        ]);

        return $this->allProducts();
    }

    public function editProduct(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'price' => 'required',
            'image' => 'required',
            'description' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 401, 'errors' => $validator->messages()]);
        }

        $product = Product::find($id);

        $product->update([
            'name' => $request->name,
            'description' => $request->description,
            'image' => $request->image,
            'price' => $request->price,
        ]);

        return $this->allProducts();
    }

    public function delProduct($id)
    {
        $product = Product::find($id);

        $product->delete();

        return $this->allProducts();
    }
}
