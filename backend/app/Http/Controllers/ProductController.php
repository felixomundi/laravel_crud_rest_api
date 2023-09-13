<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index(){
        $products = Product::where("status", 0)->get();
        if($products->count() >0){
            return response()->json([
                "status"=>200,
                "products"=>$products
                ], 200);
             }else{
            return response()->json([
                "status"=>404,
                ], 404);
        }

    }
    public function store(Request $request){
        $rules = [
            'name' => 'required|string|unique:products|max:255',
            'image' => ['required','image', 'mimes:jpg,png,jpeg', "max:5000"],
            "current_price" => ['required','numeric', 'min:0.00','max:50000.99', 'regex:/^\d+(\.\d{1,2})?$/'],
            "older_price"=>["required", "numeric", "min:0.00", "max:50000.00", 'regex:/^\d+(\.\d{1,2})?$/'],
            "quantity"=>["required", "integer", "min:0",],
            "status"=>["required", "integer", ],
            "trending"=>["nullable", ],
            "meta_title"=>["required",],
            "meta_keyword"=>["required",],
            "meta_description"=>["required",],
            "faq"=>["required",],
            "features"=>["required",],
            "description"=>["required",],
            "category"=>["required","integer","exists:product_categories,id"],
         ];
        $validator  = Validator::make($request->all(), $rules);
        if($validator->fails()){
            return response()->json([
                "status"=>422,
                "errors"=>$validator->messages(),
            ], 422);
        }else{
            if($request->hasFile("image")){
                $image = $request->file("image");
                $fileName = time(). ".".$image->getClientOriginalExtension();
                $image->move(public_path("/products/"), $fileName);
            }
            else{
                $fileName = '1694094800.png';
            }
            $productData = [
                "name" => $request->name,
                "description" => $request->description,
                "meta_description" => $request->meta_description,
                "meta_keyword" => $request->meta_keyword,
                "meta_title" => $request->meta_title,
                "status" => $request->status,
                "older_price" =>$request->older_price,
                "faq" =>$request->faq,
                "features" =>$request->features,
                "quantity" =>$request->quantity,
                "price" =>$request->current_price,
                "slug"=>Str::slug($request->name),
                "trending"=>$request->trending == true ? 0 : 1 ,
                "product_category_id"=>$request->category,
                "image"=>$fileName,
            ];
            $product = Product::create($productData);

            if($product){
                return response()->json([
                    "status"=>201,
                    "message"=>"Product Created Successfully",
                ], 201);
            }
            else{
                return response()->json([
                    "status"=>500,
                    "message"=>"Something went wrong",
                ], 500);
            }
        }
    }
    public function detail($slug){
        $product = Product::where("slug",$slug)->first();
        if($product){
            return response()->json([
                "status"=>200,
                "product"=>$product,
            ],200);
        }else{
            return response()->json([
                "status"=>404,
                "message"=>"Product Not Found"
            ],404);
        }
    }
}


// $rules += [
//     "name" =>["required", "string","max:100","unique:products,name,".Request::get("productId")],
//     "productId"=>["required","integer"],
//     'image' =>  'nullable',
//     "product_category"=>"required|integer",
// ];
