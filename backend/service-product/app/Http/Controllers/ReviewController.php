<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ReviewController extends Controller
{
    public function index(Request $request){
        $review = Review::query();

        $product_id = $request->query('product_id');
        if($product_id){
            $product = Product::find($product_id);
            if(!$product){
                return response()->json([
                    'status'=>'error',
                    'message'=>'product not found'
                ]);
            }
        }
        $review->when($product_id, function($query) use ($product_id){
            return $query->where('product_id', '=', $product_id);
        });

        return response()->json([
            'status'=>'success',
            'data'=>$review->get()
        ]);
    }

    public function create(Request $request){
        $rules =[
            'user_id'=>'required|integer',
            'product_id'=>'required|integer',
            'rating'=>'required|integer|min:1|max:5',
            'note'=>'string'
        ];

        $data = $request->all();

        $validator = Validator::make($data, $rules);

        if($validator->fails()){
            return response()->json([
                'status'=>'error',
                'message'=>$validator->errors()
            ], 400);
        }

        $productId = $request->input('product_id');
        $product = Product::find($productId);

        if(!$product){
            return response()->json([
                'status'=>'error',
                'message'=>'product not found'
            ],404);
        }

        $userId = $request->input('user_id');
        $user = getUser($userId);

        if($user['status'] === 'error'){
            return response()->json([
                'status'=>'error',
                'message'=>$user['message']
            ],$user['http_code']);
        }

        $isExistReview = Review::where('product_id', '=', $productId)
                                ->where('user_id', '=', $userId)
                                ->exists();

        if($isExistReview){
            return response()->json([
                'status'=>'error',
                'message'=>'review already exist'
            ], 409);
        }

        $review = Review::create($data);
        return response()->json([
            'status'=>'success',
            'data'=>$data
        ]);
    }


    public function update(Request $request, $id){
        $rules =[
            'rating'=>'integer|min:1|max:5',
            'note'=>'string'
        ];

        $data = $request->except('user_id', 'product_id');

        $validator = Validator::make($data, $rules);

        if($validator->fails()){
            return response()->json([
                'status'=>'error',
                'message'=>$validator->errors()
            ], 400);
        }
        
        $review = Review::find($id);

        if(!$review){
            return response()->json([
                'status'=>'error',
                'message'=>'review not found'
            ], 404);
        }

        $review->fill($data);

        $review->save();

        return response()->json([
            'status'=>'success',
            'data'=>$review
        ]);
    }

    public function destroy($id){
        $review = Review::find($id);

        if(!$review){
            return response()->json([
                'status'=>'error',
                'message'=>'review not found'
            ]);
        }

        $review->delete();

        return response()->json([
            'status'=>'success',
            'message'=>"review with an id: $id has been deleted"
        ]);


    }
}
