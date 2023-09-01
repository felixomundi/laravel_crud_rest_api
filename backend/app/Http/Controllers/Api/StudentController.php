<?php

namespace App\Http\Controllers\Api;

use App\Models\Students;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Requests\StudentFormRequest;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    public function index(){
        $students = Students::all();
        if($students->count()>0){
            $data = [
                "students"=>$students,
                "status"=>200,
            ];
            return response()->json($data,200);
        }else{
            $data = [
                "students"=>"No record Found",
                "status"=>404,
            ];
            return response()->json($data,404);
        }

    }
    public function store(Request $request){

        $rules = [
            "name"=>"required|max:50",
            "email"=>"required|string|email|unique:students,email|max:255",
         ];
        $validator  = Validator::make($request->all(), $rules);
        if($validator->fails()){
            return response()->json([
                "status"=>422,
                "errors"=>$validator->messages(),
            ], 422);
        }else{

            $student =
            Students::create([
                    "name"=>$request->name,
                    "email"=>$request->email,
                ]);

                if($student){
                    return response()->json([
                        "status"=>200,
                        "message"=>"Student saved successfully",
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
    public function show($id){
        $student = Students::find($id);
        if($student){
            return response()->json([
                "status"=>200,
                "student"=>$student,
            ], 200);
        }else{
            return response()->json([
                "status"=>404,
                "message"=>"Student Not Found",
            ], 404);
        }

    }

    public function edit($id){
        $student = Students::find($id);
        if($student){
            return response()->json([
                "status"=>200,
                "student"=>$student,
            ], 200);
        }else{
            return response()->json([
                "status"=>404,
                "message"=>"No such student Found",
            ], 404);
        }

    }
    public function update(Request $request, $id){

            $rules = [
                "name"=>"required|string|max:50",
                'email' => 'required|email|max:100|unique:students,email,'.$id,
             ];
            $validator  = Validator::make($request->all(), $rules);
            if($validator->fails()){
                return response()->json([
                    "status"=>422,
                    "errors"=>$validator->messages(),
                ], 422);
            }else{

                $student = Students::find($id);
                if($student){
                    $student->update([
                        "name"=>$request->name,
                        "email"=>$request->email,
                    ]);
                    return response()->json([
                        "status"=>200,
                        "student"=>$student,
                        "message"=>"Student Updated Successfully",
                    ], 200);

                }else{
                    return response()->json([
                        "status"=>404,
                        "message"=>"No such student Found",
                    ], 404);
                }

                }


    }
    public function destroy($id){
        $student = Students::find($id);
        if($student){
            $student->delete();
            return response()->json([
                "status"=>200,
                "message"=>"Student deleted",
            ], 200);

        }else{
            return response()->json([
                "status"=>404,
                "message"=>"No such student Found",
            ], 404);
        }
    }
}
