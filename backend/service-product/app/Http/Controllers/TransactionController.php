<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\Owner;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class TransactionController extends Controller
{

    public function index(Request $request){
        $transaction = Transaction::query()->with('Product');

        $user_id = $request->query('user_id');
        $transaction->when($user_id, function($query) use ($user_id){
            return $query->where('user_id', '=', $user_id);
        });

        return response()->json([
            'status'=>'success',
            'data'=>$transaction->get()
        ]);
    }

    public function create(Request $request){
        $rules = [
            'product_id'=>'required|integer',
            'user_id'=>'required|integer',
            'status'=>'in:status,on the way,done'
        ];

        $data = $request->all();

        $validator = Validator::make($data, $rules);

        if($validator->fails()){
            return response()->json([
                'status'=>'error',
                'message'=>$validator->errors()
            ], 404);
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

        $transaction = Transaction::create($data);

        return response()->json([
            'status'=>'success',
            'data'=>$transaction
        ]);
    }
}
