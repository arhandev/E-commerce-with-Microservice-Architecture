<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ImageProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ImageProductController extends Controller
{
    public function index(){
        $ImageProduct = ImageProduct::all();

        return response()->json([
            'status'=>'success',
            'data'=>$ImageProduct
        ]);
    }

    public function create(Request $request){
         $rules =[
             'image'=>'required|url',
             'product_id'=>'required|integer'
         ];

         $data = $request->all();

         $validator = Validator::make($data, $rules);

         if($validator->fails()){
            return response()->json([
                'status'=>'error',
                'message'=>$validator->errors()
            ],400);
         }

         $productId = $request->input('product_id');
         $product = Product::find($productId);
         if(!$product){
            return response()->json([
                'status'=>'error',
                'message'=>'product not found'
            ],404);
         }

         $imageProduct = ImageProduct::create($data);

         return response()->json([
             'status'=>'success',
             'data'=>$imageProduct
         ]);
    }

    public function destroy($id){
        $ImageProduct = ImageProduct::find($id);
        if(!$ImageProduct){
            return response()->json([
                'status'=>'error',
                'message'=>'image not found'
            ], 404);
        }

        $ImageProduct->delete();

        return response()->json([
            'status'=>'success',
            'message'=>"image with an id: $id has been deleted"
        ]);
    }
}
