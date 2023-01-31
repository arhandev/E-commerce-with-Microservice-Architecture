<?php

namespace App\Http\Controllers;

use App\Models\Owner;
use App\Models\Product;
use App\Models\Transaction;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;



class ProductController extends Controller
{
    public function index(Request $request){
        $product = Product::query();

        $q = $request->query('q');
        $owner_id = $request->query('owner_id');

        $product->when($q, function($query) use ($q){
            return $query->whereRaw("name LIKE '%".strtolower($q)."%'");
        });

        $product->when($owner_id, function($query) use ($owner_id){
            return $query->where('owner_id', '=', $owner_id);
        });

        return response()->json([
            'status'=>'success',
            'data'=>$product->paginate(10)
        ]);
    }

    public function show($id){

        $product = Product::with('owner')->with('images')->find($id);

        if(!$product){
            return response()->json([
                'status'=>'error',
                'message'=>'product not found'
            ]);
        }

        $reviews = Review::where('product_id', '=', $id)->get()->toArray();
        if(count($reviews) > 0){
            $userIds = array_column($reviews, 'user_id');
            $users = getUserByIds($userIds);

            if($users['status'] === 'error'){
                $reviews = [];
            }
            else{
                foreach($reviews as $key => $review){
                    $userIndex = array_search($review['user_id'], array_column($users['data'], 'id'));

                    $reviews[$key]['users'] = $users['data'][$userIndex];

                }
            }
        }

        $totalSold = Transaction::where('product_id', '=', $id)->count();

        $product['reviews'] = $reviews;
        $product['total_sold'] = $totalSold;

        return response()->json([
            'status'=>'success',
            'data'=>$product
        ]);
    }

    public function destroy($id){
        $product = Product::find($id);
        if(!$product){
            return response()->json([
                'status'=>'error',
                'message'=>'product not found'
            ], 404);
        }

        $product->delete();

        return response()->json([
            'status'=>'success',
            'message'=>"product with an id: $id has been deleted"
        ]);
    }

    public function create(Request $request){

        $rules = [
            'name'=>'required|string',
            'description'=>'string',
            'thumbnail'=>'string',
            'price'=>'required|integer',
            'category'=>'required|in:house,technology,food and drink,random_stuff,others',
            'owner_id'=>'required|integer',
            'stock'=>'required|integer'
        ];

        $data = $request->all();

        $validator = Validator::make($data, $rules);

        if($validator->fails()){
            return response()->json([
                'status'=>'error',
                'message'=>$validator->errors()
            ], 400);
        }

        $ownerId = $request->input('owner_id');
        $owner = Owner::find($ownerId);

        if(!$owner){
            return response()->json([
                'status'=>'error',
                'message'=>'owner not found'
            ], 404);
        }

        $product = Product::create($data);
        return response()->json([
            'status'=>'success',
            'data'=>$product
        ]);
    }

    public function update(Request $request, $id){
        $rules = [
            'name'=>'string',
            'description'=>'string',
            'thumbnail'=>'string',
            'price'=>'integer',
            'category'=>'in:house, technology, food and drink, random stuff, others',
            'owner_id'=>'integer',
            'stock'=>'integer'
        ];

        $data = $request->all();

        $validator = Validator::make($data, $rules);

        if($validator->fails()){
            return response()->json([
                'status'=>'error',
                'message'=>$validator->errors()
            ], 400);
        }

        $product = Product::find($id);

        if(!$product){
            return response()->json([
                'status'=>'error',
                'message'=>'product not found'
            ], 404);
        }

        $ownerId = $request->input('owner_id');

        if($ownerId){
            $owner = Owner::find($ownerId);
            if(!$owner){
                return response()->json([
                    'status'=>'error',
                    'message'=>'owner not found'
                ], 404);
            }
        }

        $product->fill($data);
        $product->save();

        return response()->json([
            'status'=>'succes',
            'data'=>$product
        ]);

    }
}
