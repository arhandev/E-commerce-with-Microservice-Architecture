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
            'user_id'=>'required|integer'
            // 'status'=>'required|in:process,on the way,done'
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

        $order = postOrder([
            'user'=>$user['data'],
            'product'=>$product->toArray()
        ]);

        echo print_r($order);
        if($order['status'] === 'error'){
            return response()->json([
                'status'=>$order['status'],
                'message'=>$order['message']
            ], $order['http_code']);
        }

        return response()->json([
            'status'=>$order['status'],
            'data'=>$order['data']
        ]);
    }

    public function createSuccessTransaction(Request $request){
        $data = $request->all();
        $transaction = Transaction::create($data);

        return response()->json([
            'status'=>'success',
            'data'=>$data
        ]);
    }
}
