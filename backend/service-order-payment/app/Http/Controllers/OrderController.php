<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class OrderController extends Controller
{
    public function index(Request $request){
        $userId = $request->input('user_id');
        $orders = Order::query();

        $orders->when($userId, function($query) use($userId){
            return $query->where('user_id', '=', $userId);
        });

        return response()->json([
            'status'=>'success',
            'data'=>$orders->get()
        ]);
    }

    public function create(Request $request){
        $user = $request->input('user');
        $product = $request->input('product');

        $order = Order::create([
            'user_id' => $user['id'],
            'product_id' => $product['id'],
        ]);

        $transactionDetails = [
            'order_id'=>$order->id.'-'.Str::random(10),
            'gross_amount'=>$product['price']
        ];

        $itemDetails = [
            [
                'id'=>$product['id'],
                'price'=>$product['price'],
                'quantity'=>1,
                'name'=>$product['name'],
                'brand'=>'HEHE',
                'category'=>'Produk Baru'
            ]
        ];

        $customerDetails = [
            'first_name'=>$user['name'],
            'email'=>$user['email']
        ];

        $midtransParams = [
            'transaction_details'=>$transactionDetails,
            'item_details'=>$itemDetails,
            'customer_details'=>[]
        ];

        $midtransSnapUrl = $this->getMidtransSnapURL($midtransParams);


        $order->snap_url=$midtransSnapUrl;
        
        $order->metadata=[
            'product_id' => $product['id'],
            'product_price' => $product['price'],
            'product_name' => $product['name'],
            'product_thumbnail' => $product['thumbnail'],
            'product_owner' => $product['owner'],
        ];

        $order->save();

        return response()->json([
            'status'=>'success',
            'data'=>$order
        ]);
    }

    private function getMidtransSnapURL($params){

	\Midtrans\Config::$serverKey = env('MIDTRANS_SERVER_KEY');
	\Midtrans\Config::$isProduction = (bool) env('MIDTRANS_PRODUCTION');
	\Midtrans\Config::$is3ds = (bool) env('MIDTRANS_3DS');

    $snapUrl = \Midtrans\Snap::createTransaction($params)->redirect_url;
    
    return $snapUrl;

    }
}
