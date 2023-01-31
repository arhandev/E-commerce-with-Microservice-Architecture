<?php

namespace App\Http\Controllers;

use App\Models\Owner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OwnerController extends Controller
{

    public function index(Request $request){
        
        $owner = Owner::all();
        return response()->json([
            'status'=> 'success',
            'data'=> $owner
        ]);
    }

    public function show($id){
        
        $owner = Owner::find($id);

        if(!$owner){
            return response()->json([
                'status'=>'error',
                'message' => 'owner not found' 
            ], 404);
        }

        return response()->json([
            'status'=> 'success',
            'data'=> $owner
        ]);
    }

    public function destroy($id){
        
        $owner = Owner::find($id);

        if(!$owner){
            return response()->json([
                'status'=>'error',
                'message' => 'owner not found' 
            ], 404);
        }

        $owner->delete();
        return response()->json([
            'status'=> 'success',
            'message'=> "owner with an id: $id deleted"
        ]);
    }



    public function create(Request $request){
        $rules = [
            'name'=> 'required|string',
            'profile'=>'required|url',
            'address'=> 'required|string',
            'phone_number' => 'required|string'
        ];

        $data = $request->all();
        
        $validator = Validator::make($data, $rules);

        if($validator->fails()){
            return response()->json([
                'status'=>'error',
                'message'=>$validator->errors()
            ], 400);
        }

        $owner = Owner::create($data);

        return response()->json(['status'=>'success', 'data'=>$owner]);

    }

    public function update(Request $request, $id){
        $rules = [
            'name'=> 'string',
            'profile'=>'url',
            'address'=> 'string',
            'phone_number' => 'string'
        ];

        $data = $request->all();
        
        $validator = Validator::make($data, $rules);

        if($validator->fails()){
            return response()->json([
                'status'=>'error',
                'message'=>$validator->errors()
            ], 400);
        }

        $owner = Owner::find($id);

        if(!$owner){
            return response()->json([
                'status'=>'error',
                'message' => 'owner not found' 
        ], 404);
        }

        $owner->fill($data);

        $owner->save();

        return response()->json([
            'status'=>'success',
            'data'=>$owner
        ]);
    }
}
