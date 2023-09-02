<?php

namespace App\Http\Controllers\Auth;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
// use App\Trait\HttpResponseTrait;


class AuthenticationController extends Controller
{
    // use HttpResponseTrait;
    public function register(Request $request){
        $rules = [
            "name"=>"required|string|max:255",
            "email"=>["required","string","email","max:255", "unique:users,email"],
            "password"=>["required", "min:8","max:8"]
        ];

        $validator  = Validator::make($request->all(), $rules);
        if($validator->fails()){
            return response()->json([
                "status"=>422,
                "errors"=>$validator->messages(),
            ], 422);
        }else{

            $user = User::create([
                "name"=>$request->name,
                "email"=>$request->email,
                "password"=>Hash::make($request->password)
            ]);

            $token =$user->createToken("auth_token")->accessToken;
            $userdata = [
                "name"=>$user->name,
                "email"=>$user->email,
                "created_at"=>$user->created_at,
            ];
            return response()->json([
                'token'=>$token,
                "user"=>$userdata,
            ]);

        }
    }
    public function login(Request $request){
        $request->validate([
            "email"=>["required","string","email"],
            "password"=>["required","min:8", "max:8"]
        ]);

        $user = User::where("email", $request->email)->first();
        if(!$user || !Hash::check($request->password, $user->password)){
            return response()->json([
                "message"=> "The provided credentials are incorrect",
            ]);
        }
        else{
            $userdata = [
                "name"=>$user->name,
                "email"=>$user->email,
                "created_at"=>$user->created_at,
            ];
             $token =$user->createToken("auth_token")->accessToken;
                return response()->json([
                    'token'=>$token,
                    "user"=>$userdata,
                ]);
        }
    }
    public function logout(Request $request){
        $request->user()->token()->revoke();
        return response()->json([
            "message"=> "The provided credentials are incorrect",
        ]);
    }
    public function getUser(Request $request){
        $user = User::find($request->user()->id);
        if($user){
            $userdata = [
                "name"=>$user->name,
                "email"=>$user->email,
                "created_at"=>$user->created_at,
            ];
            return response()->json([
                "user"=>$userdata
            ],200);
        }else{
            return response()->json([
                "error"=>"User Not Found"
            ],401);
        }

    }
}
//return UserResource::collection(User::all());
