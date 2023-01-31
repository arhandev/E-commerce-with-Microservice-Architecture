<?php

use Illuminate\Support\Facades\Http;


function createBuyAccess($data){
    $url = env('SERVICE_PRODUCT_URL').'api/transactions/success';

    try {
        $response = Http::post($url, $data);
        $data = $response->json();
        $data['http_code'] = $response->getStatusCode();
        return $data;
    } catch (\Throwable $th) {
        return [
            'status'=>'error',
            'http_code'=>500,
            'message'=>'service product unavailable'
        ];
    }
}