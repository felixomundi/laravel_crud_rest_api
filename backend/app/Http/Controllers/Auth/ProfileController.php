<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{


    public function updateprofile(Request $request){
        $user = User::find($request->user()->id);
        if($user){
           $rules = [
            "name"=>["required", "string", "max:255" ],
            'email' => 'required|email|unique:users,email,'.$user->id,

           ];

           $validator  = Validator::make($request->all(), $rules);
            if($validator->fails()){
                return response()->json([
                    "status"=>422,
                    "errors"=>$validator->messages(),
                ], 422);
            }
            else{
                $ok = $user->update([
                    "name"=>$request->name,
                    "email"=>$request->email,
                ]);

                if($ok){
                    return response()->json([
                        "status"=>200,
                        "message"=>"Profile Updated Successfully",
                    ], 200);
                }
                else{
                    return response()->json([
                        "status"=>500,
                        "message"=>"Something went wrong",
                    ], 500);
                }
            }
        }

    }
}
