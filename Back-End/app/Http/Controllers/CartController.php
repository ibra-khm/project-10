<?php

namespace App\Http\Controllers;

use App\Models\cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cart = Cart::where('user_id', Auth::user()->id)->with('product')->get();
        return response()->json(['cartData' => $cart]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $existingProduct = Cart::where('user_id', Auth::user()->id)->where('product_id', $request->product_id)->first();
        if ($existingProduct) {
            $existingProduct->quantity += $request->input('quantity');
            $existingProduct->save();
        } else {
            $product = new Cart();
            $product->user_id = Auth::user()->id;
            $product->product_id = $request->product_id;
            $product->quantity = $request->input('quantity');
            $product->save();
        }

        $cart = Cart::where('user_id', Auth::user()->id)->with('product')->get();
        return response()->json(['cartData' => $cart]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $cartItem = Cart::findOrFail($id);
        $cartItem->quantity = $request->input('quantity');
        $cartItem->save();

        $cart = Cart::where('user_id', Auth::user()->id)->with('product')->get();
        return response()->json(['cartData' => $cart]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Cart::destroy($id);

        $cart = Cart::where('user_id', Auth::user()->id)->with('product')->get();
        return response()->json(['cartData' => $cart]);
    }
}
