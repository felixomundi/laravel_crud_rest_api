<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function index(Request $request){
        $cartItems = Cart::where("user_id", $request->user()->id)->first();
        if($cartItems){
            $cartItems = Cart::where("user_id", $request->user()->id)->get();
            return response()->json([
                "status"=>200,
                "cartItems"=>$cartItems,
            ],200);
        }else{
            return response()->json([
                "status"=>404,
                "message"=>"You have an empty cart",
            ],404);
        }
    }
    public function create(Request $request){
       $user = User::find($request->user()->id);
       if($user){
        $product = Product::where("slug",$request->slug)->first();
        if($product){
            $data = [
                "user_id"=>$user->id,
                "product_id"=>$product->id,
            ];
            $cart = Cart::where($data)->first();
            if($cart){

                return response()->json([
                    "status"=>400,
                    "message"=>"Product Already Exist in cart",
                ],400);

            }else{
                Cart::create([
                    "user_id"=>$user->id,
                    "product_id"=>$product->id,
                    "quantity"=>$request->quantity,
                ]);
                return response()->json([
                    "status"=>200,
                    "message"=>"Product Added to cart successfully",
                ],200);
            }

        }else{
            return response()->json([
                "status"=>404,
                "message"=>"Product Not Found",
            ],404);
        }
       }else{
        return response()->json([
            "status"=>401,
            "message"=>"Login to Continue",
        ],401);
       }
    }
}
